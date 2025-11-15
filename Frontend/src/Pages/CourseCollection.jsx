import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const  CourseCollection = ({ search }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const params = {};
      if (search) params.search = search;
      const res = await axios.get("http://127.0.0.1:8000/api/resources/", { params });
      setCourses(res.data.results || res.data);
    } catch (err) {
      console.error("Error fetching resources:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCourses();
  }, [search]);

  if (loading)
    return (
      <div className="flex justify-center py-10">
        <p className="text-gray-500 text-lg">Loading resources...</p>
      </div>
    );

  return (
    <div className="grid gap-8 px-5 md:px-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
      {courses.length > 0 ? (
        courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-lg hover:shadow-2xl transition rounded-3xl overflow-hidden flex flex-col"
          >
            <img
              src={course.image_url || "https://via.placeholder.com/400x200"}
              alt={course.title}
              className="h-52 w-full object-cover"
            />
            <div className="flex flex-col justify-between flex-grow p-5">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 line-clamp-2">
                  {course.title}
                </h2>
                <p className="text-gray-500 mt-1">{course.platform}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {course.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1 rounded-xl"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <p className="text-gray-700 font-medium">
                  Cost: <span className="font-semibold">{course.cost}</span>
                </p>
                <Link to={course.url} target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition">
                    Get Course
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 col-span-full text-lg py-10">
          No resources found.
        </p>
      )}
    </div>
  );
};

export default CourseCollection;
