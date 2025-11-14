import React from "react";
import resources from "../data/resources.json";

const LearningResources = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Learning Resources / Courses Collection
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-contain mb-4"
            />

            <h2 className="font-bold text-xl">{item.title}</h2>
            <p className="text-sm text-gray-500">{item.platform}</p>

            <p className="mt-2 text-sm">
              <strong>Skills:</strong> {item.skills.join(", ")}
            </p>

            <p className="mt-1">
              <strong>Cost:</strong> {item.cost}
            </p>

            <a
              href={item.url}
              target="_blank"
              className="mt-3 inline-block text-blue-600 underline"
            >
              Visit
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningResources;
