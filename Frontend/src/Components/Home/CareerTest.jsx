import React, { useState } from "react";

const CareerTest = () => {
  const questions = [
    {
      id: 1,
      text: "Do you enjoy solving logical problems or puzzles?",
      options: ["Yes", "No"],
      type: "logic",
    },
    {
      id: 2,
      text: "Do you prefer working with computers or people?",
      options: ["Computers", "People"],
      type: "preference",
    },
    {
      id: 3,
      text: "Do you enjoy creating designs, art, or visuals?",
      options: ["Yes", "No"],
      type: "creative",
    },
    {
      id: 4,
      text: "Do you like organizing and planning projects?",
      options: ["Yes", "No"],
      type: "management",
    },
  ];

  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleAnswer = (questionId, option) => {
    setAnswers({ ...answers, [questionId]: option });
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) {
      alert("Please answer all questions first!");
      return;
    }

    // Simple AI-style logic
    const logic = answers[1] === "Yes";
    const creative = answers[3] === "Yes";
    const preference = answers[2] === "Computers";
    const manage = answers[4] === "Yes";

    let career = "General Professional";

    if (logic && preference) career = "Software Engineer 💻";
    else if (creative && preference) career = "UI/UX Designer 🎨";
    else if (manage && !preference) career = "Project Manager 📊";
    else if (!preference && creative) career = "Teacher or Trainer 👩‍🏫";
    else if (logic && !preference) career = "Data Analyst 📈";

    setResult(career);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4 py-10">
      <div className="max-w-3xl w-full bg-base-100 shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-[#0a65cc] mb-8">
          🧭 Career Path Finder
        </h2>

        {!result ? (
          <>
            <div className="space-y-6">
              {questions.map((q) => (
                <div key={q.id} className="p-4 border rounded-lg bg-base-200">
                  <h3 className="font-semibold mb-3">{q.text}</h3>
                  <div className="flex gap-4">
                    {q.options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleAnswer(q.id, option)}
                        className={`px-4 py-2 rounded-lg border ${
                          answers[q.id] === option
                            ? "bg-[#0a65cc] text-white"
                            : "bg-base-100 hover:bg-base-300"
                        } transition`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <button
                onClick={handleSubmit}
                className="px-6 py-3 bg-[#0a65cc] text-white rounded-lg hover:bg-[#0851a5] transition font-semibold"
              >
                See My Result
              </button>
            </div>
          </>
        ) : (
          <div className="text-center mt-10">
            <h3 className="text-2xl font-semibold mb-3 text-green-600">
              Your Suggested Career:
            </h3>
            <p className="text-3xl font-bold mb-8">{result}</p>
            <button
              onClick={() => {
                setResult(null);
                setAnswers({});
              }}
              className="px-5 py-2 bg-[#0a65cc] text-white rounded-md hover:bg-[#0851a5] transition"
            >
              Retake Test
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CareerTest;
