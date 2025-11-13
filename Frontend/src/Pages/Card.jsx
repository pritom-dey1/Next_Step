import React from "react";
import img1 from "../assets/authentication1.png";

const Card = () => {
  return (
    <section className="bg-base-100 shadow-lg rounded-xl p-3 mt-5 flex flex-col gap-4 hover:shadow-xl transition">
      <div className="flex items-center justify-evenly">
        <div>
          <img className="w-90 h-auto" src={img1} alt="" />
        </div>
        <div>
          <h1 className="font-semibold text-2xl my-2">Forward Security Director</h1>
          <p>Bauch, Schuppe and Schulist Co.</p>
        </div>
      </div>
      <div className="flex justify-evenly items-center">
        <h6>Hotels & Tourism</h6>
        <h6>Full Time</h6>
        <h6>$40000-$42000</h6>
        <h6>New-York, USA</h6>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
          Responsive
        </button>
      </div>
    </section>
  );
};

export default Card;
