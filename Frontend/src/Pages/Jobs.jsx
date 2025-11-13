import React from "react";
import { Helmet } from "react-helmet";
import Card from "./Card";
import { Outlet } from "react-router-dom";

const Jobs = () => {
  return (
    <div>
      <Helmet>
        <title>NextStep | Jobs</title>
      </Helmet>
      <div className="h-50 bg-black flex items-center justify-center pt-20">
        <h1 className="text-white  font-bold text-4xl text-center">Jobs</h1>
      </div>
      <section className="flex flex-row gap-10 max-w-7xl px-4 mx-auto">
        {/* Sidebar */}
        <div
          className="w-1/3 p-7 rounded-lg mt-7"
          style={{ backgroundColor: "rgba(235, 245, 244, 1)" }}
        >
          <h3 className="font-semibold text-lg text-wh my-2">
            Search by Job Title
          </h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Job title or company"
              className="w-full  pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-3 top-3 text-gray-400"
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
          {/* Location */}
          <div className="mb-6">
            <h2 className="font-semibold text-lg my-4">Location</h2>
            <select
              className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              defaultValue=""
            >
              <option value="" disabled>
                Choose city
              </option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Khulna">Khulna</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Barishal">Barishal</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Mymensingh">Mymensingh</option>
              <option value="Gazipur">Gazipur</option>
              <option value="Narayanganj">Narayanganj</option>
              <option value="Cumilla">Cumilla</option>
              <option value="Noakhali">Noakhali</option>
              <option value="Feni">Feni</option>
              <option value="Brahmanbaria">Brahmanbaria</option>
              <option value="Cox’s Bazar">Cox’s Bazar</option>
              <option value="Tangail">Tangail</option>
              <option value="Narsingdi">Narsingdi</option>
              <option value="Faridpur">Faridpur</option>
              <option value="Kushtia">Kushtia</option>
              <option value="Jessore">Jessore</option>
              <option value="Pabna">Pabna</option>
              <option value="Bogura">Bogura</option>
              <option value="Dinajpur">Dinajpur</option>
              <option value="Naogaon">Naogaon</option>
              <option value="Jamalpur">Jamalpur</option>
              <option value="Netrokona">Netrokona</option>
              <option value="Moulvibazar">Moulvibazar</option>
              <option value="Habiganj">Habiganj</option>
              <option value="Patuakhali">Patuakhali</option>
              <option value="Chuadanga">Chuadanga</option>
            </select>
          </div>
          {/* Role */}
          <div>
            <h2 className="font-semibold text-lg my-4">Role</h2>
            <ul className="space-y-3">
              {["Frontend Developer", "Backend Developer"].map(
                (category, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="checkbox checkbox-sm" />
                      <span>{category}</span>
                    </label>
                    <span className="bg-gray-100 px-2 py-0.5 rounded-full text-sm font-medium"></span>
                  </li>
                )
              )}
            </ul>
          </div>
          {/* Category */}
          <div>
            <h2 className="font-semibold text-lg my-4">Category</h2>
            <ul className="space-y-3">
              {[
                "Commerce",
                "Telecommunications",
                "Hotels & Tourism",
                "Education",
                "Financial Services",
              ].map((category, index) => (
                <li key={index} className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    <span>{category}</span>
                  </label>
                  <span className="bg-gray-100 px-2 py-0.5 rounded-full text-sm font-medium">
                    0
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* Job Type */}
          <div>
            <h2 className="font-semibold text-lg my-4">Category</h2>
            <ul className="space-y-3">
              {[
                "Part Time",
                "Full Time",
                "Freelance",
                "Seasonal",
                "Fixed-Price",
              ].map((category, index) => (
                <li key={index} className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    <span>{category}</span>
                  </label>
                  <span className="bg-gray-100 px-2 py-0.5 rounded-full text-sm font-medium">
                    0
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card Section */}
        <div className="w-2/3 rounded-lg pl-3 mt-7">
          {/* Headline */}
          <div className="flex items-center justify-between">
            <h3 className=" text-lg text-wh ">Search by Job Title</h3>
            {/* Sort by latest */}
            <select
              className=" border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              defaultValue=""
            >
              <option value="" disabled>
                Sort by latest
              </option>
            </select>
          </div>

          {/* Card */}
          <Card></Card>
          <Outlet></Outlet>
        </div>
      </section>
    </div>
  );
};

export default Jobs;
