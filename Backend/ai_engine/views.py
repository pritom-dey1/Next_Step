from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import torch
import os
import fitz  # PyMuPDF for PDF parsing

# Load AI model and tokenizer globally
MODEL_NAME = "google/flan-t5-base"
tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
model = AutoModelForSeq2SeqLM.from_pretrained(MODEL_NAME)

class ExtractSkillsAPIView(APIView):
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request, *args, **kwargs):
        cv_file = request.FILES.get("cv_file")
        if not cv_file:
            return Response("CV file not provided", status=status.HTTP_400_BAD_REQUEST)

        # Save file temporarily
        temp_path = os.path.join("media", cv_file.name)
        with open(temp_path, "wb") as f:
            for chunk in cv_file.chunks():
                f.write(chunk)

        try:
            # Parse PDF or text file
            text = ""
            if cv_file.name.endswith(".pdf"):
                doc = fitz.open(temp_path)
                for page in doc:
                    text += page.get_text()
                doc.close()
            else:
                with open(temp_path, "r", encoding="utf-8") as f:
                    text = f.read()

            os.remove(temp_path)

          
            prompt = f"""
You are an expert career advisor and recruiter.

Read the following CV carefully. Provide a detailed plain text output with the following sections:

Key Skills:
Tools & Technologies:
Relevant Roles:
Recommended Role(s):
Domain/Field:

Do NOT include the candidate's name or website unless they are part of skills, tools, or roles. Only extract meaningful information from the CV content.

CV Text:
{text}
"""
            inputs = tokenizer(prompt, return_tensors="pt", max_length=1024, truncation=True)
            outputs = model.generate(**inputs, max_length=256)
            result_text = tokenizer.decode(outputs[0], skip_special_tokens=True)

            # Fallback keyword extraction if AI returns empty or generic
            fallback = ""
            if not result_text.strip() or "Key Skills:" not in result_text:
                skills_keywords = ["Python", "Django", "React", "JavaScript", "C++"]
                tools_keywords = ["Git", "Docker", "Figma", "Photoshop"]
                roles_keywords = ["Developer", "Designer", "Engineer", "Data Analyst"]

                key_skills = [k for k in skills_keywords if k.lower() in text.lower()]
                tools = [t for t in tools_keywords if t.lower() in text.lower()]
                roles = [r for r in roles_keywords if r.lower() in text.lower()]

                recommended_role = "Developer" if "developer" in text.lower() else "General"

                fallback = (
                    f"Key Skills: {', '.join(key_skills) or 'Not found'}\n"
                    f"Tools & Technologies: {', '.join(tools) or 'Not found'}\n"
                    f"Relevant Roles: {', '.join(roles) or 'Not found'}\n"
                    f"Recommended Role(s): {recommended_role}\n"
                )

            final_text = result_text.strip() or fallback

            return Response(final_text, content_type="text/plain")

        except Exception as e:
            return Response(f"Error: {str(e)}", status=status.HTTP_500_INTERNAL_SERVER_ERROR)
