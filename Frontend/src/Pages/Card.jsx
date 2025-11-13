import React from "react";
import img1 from "../assets/authentication1.png";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <section className="bg-base-100 shadow-lg rounded-xl p-3 mt-5 flex flex-col gap-4 hover:shadow-xl transition">
      <div className="flex items-center justify-evenly">
        <div>
          <img className="w-90 h-auto" src={img1} alt="" />
        </div>
        <div>
          <h1 className="font-semibold text-2xl my-2">
            Forward Security Director
          </h1>
          <p>Bauch, Schuppe and Schulist Co.</p>
        </div>
      </div>
      <div className="flex justify-evenly items-center">
        <h6>Hotels & Tourism</h6>
        <h6>Full Time</h6>
        <h6>$40000-$42000</h6>
        <h6>New-York, USA</h6>
        <Link to="/job-details">
          <button className="btn btn-active btn-accent">Job Details</button>
        </Link>
      </div>
    </section>
  );
};

export default Card;
