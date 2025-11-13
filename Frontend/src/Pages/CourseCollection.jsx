import React from "react";
import img1 from "../assets/authentication1.png";
import { Link } from "react-router-dom";

const CourseCollection = () => {
  return (
    <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 px-5">
      {/*  */}
      <div className="bg-base-100 shadow-2xl rounded-3xl p-3 mt-5 flex flex-col gap-4 hover:shadow-xl transition">
        <img className="w-90 h-auto" src={img1} alt="" />
        <h1 className="font-semibold text-2xl mt-2">
          Forward Security Director
        </h1>
        <p>Bauch, Schuppe and Schulist Co.</p>
        <Link>
          <button className="btn btn-dash btn-info mb-3">Get Course</button>
        </Link>
      </div>
      {/*  */}
      <div className="bg-base-100 shadow-2xl rounded-3xl p-3 mt-5 flex flex-col gap-4 hover:shadow-xl transition">
        <img className="w-90 h-auto" src={img1} alt="" />
        <h1 className="font-semibold text-2xl mt-2">
          Forward Security Director
        </h1>
        <p>Bauch, Schuppe and Schulist Co.</p>
        <Link>
          <button className="btn btn-dash btn-info mb-3">Get Course</button>
        </Link>
      </div>
      {/*  */}
      <div className="bg-base-100 shadow-2xl rounded-3xl p-3 mt-5 flex flex-col gap-4 hover:shadow-xl transition">
        <img className="w-90 h-auto" src={img1} alt="" />
        <h1 className="font-semibold text-2xl mt-2">
          Forward Security Director
        </h1>
        <p>Bauch, Schuppe and Schulist Co.</p>
        <Link>
          <button className="btn btn-dash btn-info mb-3">Get Course</button>
        </Link>
      </div>
    </section>
  );
};

export default CourseCollection;
