import React from "react";
import Card1 from "../../assets/Icon+ bg (2).png";
import Card2 from "../../assets/Icon+ bg (1).png";
import Card3 from "../../assets/Icon+ bg.png";
import Card4 from "../../assets/check-mark 1.png";

const ExtraAbout = () => {
  const steps = [
    {
      name: "Create Account",
      image: Card1,
      description: "Sign up quickly and securely to start your journey.",
    },
    {
      name: "Upload Resume",
      image: Card2,
      description: "Upload your resume to showcase your skills and experience.",
    },
    {
      name: "Find Jobs",
      image: Card3,
      description:
        "Browse opportunities tailored to your profile and interests.",
    },
    {
      name: "Apply Job",
      image: Card4,
      description:
        "Easily apply for jobs and track your applications in one place.",
    },
  ];

  return (
    <section className="min-h-screen bg-base-200 px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#0a65c] mb-4">
          How It Works
        </h1>
        <p className="text-gray-700 dark:text-gray-300 pb-12 max-w-2xl mx-auto leading-relaxed">
          Discover how our platform guides you step by step to explore
          opportunities, build skills, and achieve your goals efficiently and
          confidently.
        </p>

        {/* Steps Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-base-100 shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
            >
              <img
                src={step.image}
                alt={step.name}
                className="w-20 h-20 object-contain mb-4"
              />
              <h5 className="text-xl font-semibold pt-2 pb-2">{step.name}</h5>
              <p className="text-gray-700 dark:text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraAbout;
