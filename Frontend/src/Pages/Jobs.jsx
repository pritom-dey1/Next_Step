import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Card from "./Card";
import { Outlet } from "react-router-dom";
import axios from "axios";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    role: "",
    job_type: "",
  });
  const [filterOptions, setFilterOptions] = useState({
    locations: [],
    roles: [],
    job_types: [],
  });
  const [loading, setLoading] = useState(false);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const params = {};
      Object.keys(filters).forEach((key) => {
        if (filters[key]) {
          if (key === "role") params["experience_level"] = filters[key];
          else if (key === "search") params["search"] = filters[key];
          else params[key] = filters[key];
        }
      });

      const res = await axios.get("http://127.0.0.1:8000/api/jobs/", { params });
      setJobs(res.data.results || res.data);
    } catch (err) {
      console.error("Fetch Jobs Error:", err);
    }
    setLoading(false);
  };

  // Fetch filter options from backend
  const fetchFilterOptions = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/jobs/filters/");
      setFilterOptions({
        locations: res.data.locations,
        roles: res.data.roles,
        job_types: res.data.job_types,
      });
    } catch (err) {
      console.error("Fetch Filter Options Error:", err);
    }
  };

  useEffect(() => {
    fetchFilterOptions();
    fetchJobs();
  }, []);

  // Refetch jobs when filters change
  useEffect(() => {
    fetchJobs();
  }, [filters]);

  return (
    <div>
      <Helmet>
        <title>NextStep | Jobs</title>
      </Helmet>

      <div className="h-50 bg-black flex items-center justify-center pt-20">
        <h1 className="text-white font-bold text-4xl text-center">Jobs</h1>
      </div>

<section className="max-w-7xl px-4 mx-auto mt-7 py-10">
  {/* Filter Section */}
  <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6 bg-gray-100 p-6 rounded-lg shadow-md">
    {/* Search */}
    <div className="flex-1">
      <h3 className="font-semibold text-lg mb-2">Search by Job Title / Company</h3>
      <input
        type="text"
        placeholder="Type job title or company..."
        className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={filters.search}
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
      />
    </div>

    {/* Location */}
    <div>
      <h3 className="font-semibold text-lg mb-2">Location</h3>
      <select
        className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={filters.location}
        onChange={(e) => setFilters({ ...filters, location: e.target.value })}
      >
        <option value="">All Locations</option>
        {filterOptions.locations.map((loc, i) => (
          <option key={i} value={loc}>{loc}</option>
        ))}
      </select>
    </div>

    {/* Experience Level */}
    <div>
      <h3 className="font-semibold text-lg mb-2">Experience Level</h3>
      <select
        className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={filters.role}
        onChange={(e) => setFilters({ ...filters, role: e.target.value })}
      >
        <option value="">All Roles</option>
        {filterOptions.roles.map((role, i) => (
          <option key={i} value={role}>{role}</option>
        ))}
      </select>
    </div>

    {/* Job Type */}
    <div>
      <h3 className="font-semibold text-lg mb-2">Job Type</h3>
      <select
        className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={filters.job_type}
        onChange={(e) => setFilters({ ...filters, job_type: e.target.value })}
      >
        <option value="">All Types</option>
        {filterOptions.job_types.map((type, i) => (
          <option key={i} value={type}>{type}</option>
        ))}
      </select>
    </div>
  </div>

  {/* Job Cards */}
  <div className="flex flex-col gap-5">
    {loading ? (
      <p>Loading jobs...</p>
    ) : jobs.length > 0 ? (
      jobs.map((job) => <Card key={job.id} job={job} />)
    ) : (
      <p>No jobs found</p>
    )}
    <Outlet />
  </div>
</section>


    </div>
  );
};

export default Jobs;
