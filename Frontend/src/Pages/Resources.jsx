import React, { useState } from "react";
import { Helmet } from "react-helmet";
import CourseCollection from "./CourseCollection";
import LearningResources from "../Data/LearningResources";

const Resources = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>NextStep | Resources</title>
      </Helmet>

      <header className="bg-gradient-to-r from-gray-900 to-black py-20 flex flex-col items-center justify-center shadow-md">
        <h1 className="text-white font-extrabold text-5xl text-center tracking-wide">
          Explore Learning Resources
        </h1>
        <p className="text-gray-300 mt-4 text-lg max-w-2xl text-center">
          Discover the best curated learning platforms and boost your skills.
        </p>
      </header>

      {/* Input from User */}
      <div className="max-w-5xl mx-auto relative mt-10 px-4">
        <input
          type="text"
          placeholder="Search resources by title or skill..."
          className="w-full pl-12 pr-4 py-3 text-lg border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M5 11a6 6 0 1112 0 6 6 0 01-12 0z"
          />
        </svg>
      </div>
      <div>
        <LearningResources></LearningResources>
      </div>

      <section className="mt-10 pb-20">
        <CourseCollection search={search} />
      </section>
    </div>
  );
};

export default Resources;
