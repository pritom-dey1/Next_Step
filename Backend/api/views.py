from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import PyPDF2
import json

tokenizer = AutoTokenizer.from_pretrained("google/flan-t5-base")
model = AutoModelForSeq2SeqLM.from_pretrained("google/flan-t5-base")

class ExtractSkillsAPIView(APIView):
    def post(self, request):
        file = request.FILES.get("cv")
        if not file:
            return Response({"error": "CV file missing"}, status=400)

        reader = PyPDF2.PdfReader(file)
        text = ""
        for page in reader.pages:
            text += page.extract_text()

        prompt = f"""
        Extract clean JSON with the following fields:
        - key_skills
        - tools
        - relevant_roles
        - domain

        CV: {text}
        """

        inputs = tokenizer(prompt, return_tensors="pt")
        outputs = model.generate(**inputs, max_length=300)
        result = tokenizer.decode(outputs[0], skip_special_tokens=True)

        try:
            return Response(json.loads(result))
        except:
            return Response({"raw": result})
