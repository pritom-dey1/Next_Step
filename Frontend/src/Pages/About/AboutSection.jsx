import React from "react";

const AboutSection = () => {
  return (
    <section className="min-h-screen bg-base-200 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#0a65cc] mt-10 mb-6">
          About NextStep
        </h1>

        {/* Subtitle */}
        <p className="text-center text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12">
          Empowering students and youth to discover careers, learn skills, and
          connect with opportunities for a brighter future.
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-base-100 shadow-lg rounded-xl p-6 flex flex-col gap-4 hover:shadow-2xl transition">
            <h2 className="text-2xl font-semibold text-[#0a65cc]">
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              NextStep is committed to helping students and fresh graduates
              identify relevant job opportunities, plan their learning journey,
              and build skills aligned with SDG 8 — promoting decent work and
              economic growth for all.
            </p>
          </div>

          {/* What We Offer */}
          <div className="bg-base-100 shadow-lg rounded-xl p-6 flex flex-col gap-4 hover:shadow-2xl transition">
            <h2 className="text-2xl font-semibold text-[#0a65cc]">
              What We Offer
            </h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Personalized career roadmap and skills tracker</li>
              <li>Access to entry-level jobs and internships</li>
              <li>Curated learning resources and courses</li>
              <li>Simple dashboard to track your progress</li>
              <li>Rule-based recommendations matching your skills</li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-base-100 shadow-lg rounded-xl p-6 flex flex-col gap-4 hover:shadow-2xl transition">
            <h2 className="text-2xl font-semibold text-[#0a65cc]">Benefits</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Save time finding jobs aligned with your skills</li>
              <li>Discover learning resources to upskill efficiently</li>
              <li>Understand career paths and growth opportunities</li>
              <li>Interactive and easy-to-use interface</li>
            </ul>
          </div>

          {/* Future Vision */}
          <div className="bg-base-100 shadow-lg rounded-xl p-6 flex flex-col gap-4 hover:shadow-2xl transition">
            <h2 className="text-2xl font-semibold text-[#0a65cc]">
              Future Vision
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              In the next phase, NextStep will integrate AI-powered
              recommendations to provide smarter job and learning matches,
              helping youth make informed career decisions with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
