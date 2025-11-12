import React, { useState } from "react";
import Logo from "../../assets/NextstepLogo.png";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/50 backdrop-blur-md shadow-md z-50">
      <div className="flex max-w-[1300px] mx-auto py-4 px-4 items-center justify-between">
        <div className="flex gap-2 items-center">
          <img src={Logo} alt="logo" className="object-cover w-8" />
          <h2 className="text-[30px] font-bold tracking-wide"><span className="text-[#0a65cc]">NEXTSTEP</span></h2>
        </div>

        <div className="hidden md:flex justify-center gap-8 uppercase font-medium text-gray-700">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#0a65cc]" : "hover:text-[#0a65cc] transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#0a65cc]" : "hover:text-[#0a65cc] transition"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              isActive ? "text-[#0a65cc]" : "hover:text-[#0a65cc] transition"
            }
          >
            Jobs
          </NavLink>
          <NavLink
            to="/resources"
            className={({ isActive }) =>
              isActive ? "text-[#0a65cc]" : "hover:text-[#0a65cc] transition"
            }
          >
            Resources
          </NavLink>
        </div>

        <div className="hidden md:flex">
          <NavLink
            to="/auth"
            className="px-5 py-2.5 bg-[#0a65cc] text-white uppercase font-medium rounded-md hover:bg-[#0851a5] transition duration-300"
          >
            Explore Now
          </NavLink>
        </div>

        <div className="md:hidden flex items-center">
          {open ? (
            <X size={28} onClick={() => setOpen(false)} className="cursor-pointer" />
          ) : (
            <Menu size={28} onClick={() => setOpen(true)} className="cursor-pointer" />
          )}
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t shadow-md flex flex-col items-center gap-4 py-4 uppercase font-medium text-gray-700">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="hover:text-[#0a65cc] transition"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className="hover:text-[#0a65cc] transition"
          >
            About
          </NavLink>
          <NavLink
            to="/jobs"
            onClick={() => setOpen(false)}
            className="hover:text-[#0a65cc] transition"
          >
            Jobs
          </NavLink>
          <NavLink
            to="/resources"
            onClick={() => setOpen(false)}
            className="hover:text-[#0a65cc] transition"
          >
            Resources
          </NavLink>
          <NavLink
            to="/explore"
            onClick={() => setOpen(false)}
            className="px-5 py-2 bg-[#0a65cc] text-white rounded-md hover:bg-[#1ab09e] transition"
          >
            Explore Now
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
