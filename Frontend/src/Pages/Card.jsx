import React from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

const Card = ({ job }) => {
  const defaultImage = "/default-job.png";
  const imageUrl = job.image_url || defaultImage;

  return (
    <section className="bg-white shadow-md rounded-xl p-5 mt-5 hover:shadow-xl transition duration-300">
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
        {/* Left Section: Image & Title */}
        <div className="flex items-center gap-4 w-full md:w-2/3">
          <img
            src={imageUrl}
            alt={job.title}
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div>
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-400">
                {job.created_at
                  ? formatDistanceToNow(new Date(job.created_at), { addSuffix: true })
                  : ""}
              </p>
            </div>
            <h2 className="font-bold text-xl md:text-2xl mt-1">{job.title}</h2>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-gray-500 text-sm mt-1">{job.location || "Location not specified"}</p>
          </div>
        </div>

        {/* Right Section: Tags */}
        <div className="flex flex-wrap gap-2 md:gap-3 mt-3 md:mt-0">
          {job.experience_level && (
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {job.experience_level}
            </span>
          )}
          {job.job_type && (
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              {job.job_type}
            </span>
          )}
          {job.required_skills &&
            job.required_skills.length > 0 &&
            job.required_skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
        </div>
      </div>

      {/* Bottom Section: Job Details button & optional salary */}
      <div className="flex justify-between items-center mt-4">
        <Link to={`/jobs/${job.id}`}>
          <button className="bg-[#0a65cc] text-white px-4 py-2 rounded-md hover:bg-[#0851a5] transition">
            Job Details
          </button>
        </Link>
        {job.salary && (
          <p className="text-gray-700 font-medium">{job.salary}</p>
        )}
      </div>
    </section>
  );
};

export default Card;
