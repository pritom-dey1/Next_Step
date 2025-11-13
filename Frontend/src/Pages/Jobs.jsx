import React from "react";
import { Helmet } from "react-helmet";

const Jobs = () => {
  return (
    <div>
      <Helmet>
        <title>NextStep Jobs</title>
      </Helmet>
      <div className="h-20 ">
        <h1 className="text-white font-bold text-3xl uppercase">Jobs</h1>
      </div>
    </div>
  );
};

export default Jobs;
