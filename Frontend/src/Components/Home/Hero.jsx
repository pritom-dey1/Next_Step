import React from "react";
import HeroImg from "../../assets/hero.png";
import { NavLink } from "react-router-dom";
const Hero = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex flex-col-reverse lg:flex-row items-center min-h-screen justify-between px-4 lg:px-0">
      {/* Text Section */}
      <div className="flex flex-col gap-4 lg:w-[55%] w-full text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] uppercase font-medium leading-snug sm:leading-tight lg:leading-tight">
          Empowering Your Next Career Move with <br />
          <span className="text-[#0a65cc] font-black">NEXTSTEP</span>
        </h1>
        <p className="uppercase text-sm sm:text-base md:text-lg lg:text-[18px]">
          Explore jobs, resources, and insights to help you succeed faster....
        </p>
        <NavLink
          to="/jobs"
          className="w-full sm:w-1/2 md:w-1/3 lg:w-[18%] mt-4 flex items-center justify-center py-2 bg-[#0a65cc] text-white uppercase font-medium rounded-md hover:bg-[#0851a5] transition duration-300 text-sm sm:text-base md:text-lg lg:text-[18px] mx-auto lg:mx-0"
        >
          Find Jobs
        </NavLink>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-[45%] flex justify-center mb-6 lg:mb-0">
        <img
          src={HeroImg}
          alt="Hero"
          className="object-cover w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
