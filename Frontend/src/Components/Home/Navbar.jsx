import React, { useState, useContext } from "react";
import Logo from "../../assets/NextstepLogo.png";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { UserContext } from "../../../context/UserContext"; // path ta adjust koro

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, loading } = useContext(UserContext);

  return (
    <nav className="fixed top-0 left-0 w-full bg-base-100/80 backdrop-blur-md shadow-md z-50 transition-colors duration-500">
      <div className="flex max-w-[1300px] mx-auto py-4 items-center justify-between">
        <div className="flex gap-2 items-center">
          <img src={Logo} alt="logo" className="object-cover w-8" />
          <h2 className="text-[30px] font-bold tracking-wide">
            <span className="text-[#0a65cc]">NEXTSTEP</span>
          </h2>
        </div>

        <div className="hidden md:flex justify-center gap-8 uppercase font-medium text-gray-700">
          {["/", "/about", "/jobs", "/resources"].map((path, index) => {
            const names = ["Home", "About", "Jobs", "Resources"];
            return (
              <NavLink
                key={index}
                to={path}
                className={({ isActive }) =>
                  isActive ? "text-[#0a65cc]" : "hover:text-[#0a65cc] transition"
                }
              >
                {names[index]}
              </NavLink>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-5">
          {/*  Toggle Button */}
          <button
            onClick={handleThemeToggle}
            className="relative flex items-center justify-between w-14 h-7 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-all duration-500"
          >
            <div
              className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-500 ${
                theme === "dark" ? "translate-x-7" : ""
              }`}
            ></div>
            <Sun className="text-yellow-500 w-5 h-5" />
            <Moon className="text-gray-600 dark:text-gray-200 w-5 h-5" />
          </button>

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
        <div className="md:hidden bg-base-100 border-t shadow-md flex flex-col items-center gap-4 py-4 uppercase font-medium text-gray-700">
          {["Home", "About", "Jobs", "Resources"].map((name, index) => (
            <NavLink
              key={index}
              to={name === "Home" ? "/" : `/${name.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="hover:text-[#0a65cc] transition"
            >
              {name}
            </NavLink>
          ))}

          <NavLink
            to="/auth"
            onClick={() => setOpen(false)}
            className="px-5 py-2 bg-[#0a65cc] text-white rounded-md hover:bg-[#0851a5] transition"
          >
            Explore Now
          </NavLink>

          {/*  Mobile Toggle */}
          <button
            onClick={handleThemeToggle}
            className="relative flex items-center justify-between w-14 h-7 bg-gray-200 dark:bg-gray-700 rounded-full p-1 mt-2 transition-all duration-500"
          >
            <div
              className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-500 ${
                theme === "dark" ? "translate-x-7" : ""
              }`}
            ></div>
            <Sun className="text-yellow-500 w-5 h-5" />
            <Moon className="text-gray-600 dark:text-gray-200 w-5 h-5" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
