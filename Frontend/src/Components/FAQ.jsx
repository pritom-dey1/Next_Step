import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question:
        "How can I find resources for my suggested career after completing the Career Path Finder test?",
      answer:
        "After completing the Career Path Finder test, your suggested career will appear on the screen. Below the result, you will see two buttons: Retake Test and Find Resource. By clicking the Find Resource button, you will be redirected to the Resources page, where you can explore tutorials, guides, and other materials related to your recommended career path.",
    },
    {
      question: "Can I retake the Career Path Finder test?",
      answer:
        "Yes! After viewing your suggested career, click the 'Retake Test' button to clear your previous answers and take the test again.",
    },
    {
      question: "Do I need to answer all questions to get a result?",
      answer:
        "Yes, you must answer all questions before submitting. If any question is left unanswered, you will receive an alert prompting you to complete it.",
    },
    {
      question: "Are the suggested careers personalized?",
      answer:
        "Yes, the suggested careers are based on your answers and the simple AI-style logic implemented in the test. They aim to match your skills, preferences, and interests.",
    },
  ];

  return (
    <section className="min-h-screen bg-base-200 px-4 py-10 flex flex-col items-center">
      <div className="max-w-3xl w-full bg-base-100 shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-[#0a65cc] mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="p-4 border rounded-lg bg-base-200 hover:bg-base-300 transition"
            >
              <summary className="font-semibold cursor-pointer">
                {faq.question}
              </summary>
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
