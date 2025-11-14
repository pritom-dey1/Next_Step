import React from "react";

const JobFilterSidebar = () => {
  return (
    <div className="w-full bg-[#E9F3F2] p-6 rounded-lg space-y-6">
      <h2 className="font-semibold text-lg mb-2">Job Overview</h2>
      <hr />

      {/* Job Title */}
      <div>
        <p className="text-sm text-gray-500">Job Title</p>
        <p className="font-medium">Corporate Solutions Executive</p>
      </div>

      {/* Job Type */}
      <div>
        <p className="text-sm text-gray-500">Job Type</p>
        <p className="font-medium">Full Time</p>
      </div>

      {/* Category */}
      <div>
        <p className="text-sm text-gray-500">Category</p>
        <p className="font-medium">Corporate</p>
      </div>

      {/* Experience */}
      <div>
        <p className="text-sm text-gray-500">Experience</p>
        <p className="font-medium">1-2 Years</p>
      </div>

      {/* Degree */}
      <div>
        <p className="text-sm text-gray-500">Degree</p>
        <p className="font-medium">Master</p>
      </div>

      {/* Offered Salary */}
      <div>
        <p className="text-sm text-gray-500">Offered Salary</p>
        <p className="font-medium">$40,000 - $42,000</p>
      </div>

      {/* Location */}
      <div>
        <p className="text-sm text-gray-500">Location</p>
        <p className="font-medium">New York, USA</p>
      </div>

      {/* Google Map */}
      <div className="rounded-xl overflow-hidden border border-gray-300">
        <iframe
          title="Google Map"
          width="100%"
          height="200"
          loading="lazy"
          allowFullScreen
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193571.43872886562!2d-74.11808649041953!3d40.70582534249786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b4d6b0f09b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1700000000000"
        ></iframe>
      </div>
    </div>
  );
};

export default JobFilterSidebar;
