import React, { useState, useEffect } from "react";
import Logo from "../../assets/NextstepLogo.png";
import { NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-base-100/80 backdrop-blur-md shadow-md z-50 transition-colors duration-500">
      <div className="flex max-w-[1300px] mx-auto py-4 px-4 items-center justify-between">
        {/* --- Logo --- */}
        <div className="flex gap-2 items-center">
          <img src={Logo} alt="logo" className="object-cover w-8" />
          <h2 className="text-[30px] font-bold tracking-wide">
            <span className="text-[#0a65cc]">NEXTSTEP</span>
          </h2>
        </div>

        {/* --- Desktop Nav Links --- */}
        <div className="hidden md:flex justify-center gap-8 uppercase font-medium text-gray-700 dark:text-gray-200">
          {["/", "/about", "/jobs", "/resources"].map((path, index) => {
            const names = ["Home", "About", "Jobs", "Resources"];
            return (
              <NavLink
                key={index}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#0a65cc]"
                    : "hover:text-[#0a65cc] transition"
                }
              >
                {names[index]}
              </NavLink>
            );
          })}
        </div>

        {/* --- Buttons + Toggle --- */}
        <div className="hidden md:flex items-center gap-5">
          <NavLink
            to="/auth"
            className="px-5 py-2.5 bg-[#0a65cc] text-white uppercase font-medium rounded-md hover:bg-[#0851a5] transition duration-300"
          >
            Explore Now
          </NavLink>
        </div>

        {/* --- Mobile Menu Icon --- */}
        <div className="md:hidden flex items-center">
          {open ? (
            <X
              size={28}
              onClick={() => setOpen(false)}
              className="cursor-pointer"
            />
          ) : (
            <Menu
              size={28}
              onClick={() => setOpen(true)}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* --- Mobile Dropdown --- */}
      {open && (
        <div className="md:hidden bg-base-100 border-t shadow-md flex flex-col items-center gap-4 py-4 uppercase font-medium text-gray-700 dark:text-gray-200">
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
