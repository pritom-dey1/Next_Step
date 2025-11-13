import React from "react";

const ExtraAbout = () => {
  const mentors = [
    {
      name: "Abdullah all Mojahid",
      role: "Fronend Developer & Problem Solver",
      image: "https://via.placeholder.com/150",
      bio: "Guides students in career planning and skill development with AI-driven insights.",
    },
    {
      name: "Pritom Dey",
      role: "Backend Developer",
      image: "https://via.placeholder.com/150",
      bio: "Provides mentorship on coding, internships, and practical industry skills.",
    },
    {
      name: "Ms. Fatima Akter",
      role: "Learning & Development Specialist",
      image: "https://via.placeholder.com/150",
      bio: "Helps students choose learning resources aligned with their career goals.",
    },
  ];

  return (
    <section className="min-h-screen bg-base-200 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#0a65cc] mb-6">
          Our Mentor Panel
        </h1>

        <p className="text-center text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12">
          Experienced mentors guiding students and youth towards their dream
          careers.
        </p>

        {/* Mentor Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-base-100 shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
            >
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h2 className="text-xl font-semibold text-[#0a65cc]">
                {mentor.name}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 italic mb-3">
                {mentor.role}
              </p>
              <p className="text-gray-700 dark:text-gray-300">{mentor.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraAbout;
