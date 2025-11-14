import React from "react";
import { Helmet } from "react-helmet";
import Img from "../assets/authentication1.png";
import JobFilterSidebar from "./JobFilterSidebar";

const JobDetails = () => {
  return (
    <div>
      <Helmet>
        <title>NextStep | Job Details</title>
      </Helmet>

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#0a65cc] to-[#003f88] flex items-center justify-center py-20 mt-10 rounded-xl shadow-md">
        <h1 className="text-white font-bold text-4xl text-center drop-shadow-lg">
          Job Details
        </h1>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-6 my-10 px-4 lg:px-10">
        {/* Image Section */}
        <div className="lg:w-1/3 flex justify-center">
          <img
            className="w-full rounded-xl shadow-lg hover:scale-105 transition duration-300"
            src={Img}
            alt="Job Illustration"
          />
        </div>

        {/* Job Details Card */}
        <div className="lg:w-2/3 p-8 bg-white shadow-2xl rounded-2xl border border-gray-200 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300">
          <h1 className="font-bold text-3xl mb-2 text-gray-800">
            Corporate Solutions Executive
          </h1>

          <p className="text-gray-600 text-lg mb-5">Leffler and Sons</p>
          <hr className="my-4" />

          {/* Job Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <p>
              <span className="font-semibold text-gray-800">Location:</span>{" "}
              New-York, USA
            </p>
            <p>
              <span className="font-semibold text-gray-800">Salary:</span>{" "}
              $40,000 – $42,000
            </p>
            <p>
              <span className="font-semibold text-gray-800">Job Type:</span>{" "}
              Full-time
            </p>
            <p>
              <span className="font-semibold text-gray-800">Experience:</span>{" "}
              1-2 years
            </p>
          </div>

          {/* Apply Button */}
          <div className="flex justify-end mt-10">
            <button className="px-6 py-3 bg-[#0a65cc] text-white text-lg rounded-lg hover:bg-[#062f5e] transition duration-300 shadow-md">
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <hr className="mt-4" />

      {/* Job Description and Professional Skills  */}
      <div>
        <div className="lg:flex items-start justify-between p-8 gap-7">
          {/* Jobs Details, Responsibilities & Skills*/}
          <div className="lg:w-2/3">
            {/*  */}
            <div className="p-3">
              <h1 className="font-bold text-xl my-5">Job Description </h1>
              <p>
                Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique.
                Sit congue non vitae odio sit erat in. Felis eu ultrices a sed
                massa. Commodo fringilla sed tempor risus laoreet ultricies
                ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim
                feugiat enim volutpat. Sem quis viverra viverra odio mauris
                nunc. Et nunc ut tempus duis nisl sed massa. Ornare varius
                faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim
                augue lorem amet adipiscing cursus fames mauris. Tortor amet
                porta proin in.
              </p>
            </div>
            {/*  */}
            <div className="p-3">
              <h1 className="font-bold text-xl my-5">Key Responsibilities</h1>
              {/* <p>
                Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique.
                Sit congue non vitae odio sit erat in. Felis eu ultrices a sed
                massa. Commodo fringilla sed tempor risus laoreet ultricies
                ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim
                feugiat enim volutpat. Sem quis viverra viverra odio mauris
                nunc. Et nunc ut tempus duis nisl sed massa. Ornare varius
                faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim
                augue lorem amet adipiscing cursus fames mauris. Tortor amet
                porta proin in.
              </p> */}
            </div>
          </div>
          {/* Sidebar */}
          <div className="lg:w-1/3 h-auto">
            <JobFilterSidebar></JobFilterSidebar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
