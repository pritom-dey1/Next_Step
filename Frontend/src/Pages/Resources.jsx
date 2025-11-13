import React from "react";
import { Helmet } from "react-helmet";
import CourseCollection from "./CourseCollection";

const Resources = () => {
  return (
    <div>
      <Helmet>
        <title>NextStep | Resources</title>
      </Helmet>
      <div className="h-50 bg-black flex items-center justify-center pt-20">
        <h1 className="text-white  font-bold text-4xl text-center">
          All Resources
        </h1>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Courses Collection"
          className="w-full pl-10 mt-5 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 mt-5  w-5 absolute left-3 top-3 text-gray-400"
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
      <CourseCollection></CourseCollection>
    </div>
  );
};

export default Resources;
