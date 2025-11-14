import React, { useState, useContext } from "react";
import Logo from "../../assets/NextstepLogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { UserContext } from "../../../context/UserContext";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  const handleButtonClick = () => {
    if (user) navigate("/dashboard");
    else navigate("/auth");
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-base-100/80 backdrop-blur-md shadow-md z-50 transition-colors duration-500">
      <div className="flex max-w-[1300px] mx-auto py-4 items-center justify-between">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <img src={Logo} alt="logo" className="object-cover w-8" />
          <h2 className="text-[30px] font-bold tracking-wide">
            <span className="text-[#0a65cc]">NEXTSTEP</span>
          </h2>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center gap-8 uppercase font-medium text-gray-700">
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
                {t(names[index].toLowerCase())}
              </NavLink>
            );
          })}
        </div>

        {/* Desktop Button + Language Switch */}
        <div className="hidden md:flex items-center gap-5">
          {/* Language Switch */}
          <div className="flex gap-2">
            <button
              onClick={() => i18n.changeLanguage("en")}
              className="px-2 py-1 border rounded hover:bg-gray-200"
            >
              EN
            </button>
            <button
              onClick={() => i18n.changeLanguage("bn")}
              className="px-2 py-1 border rounded hover:bg-gray-200"
            >
              BN
            </button>
          </div>

          {/* Main Action Button */}
          <button
            onClick={handleButtonClick}
            className="px-5 py-2.5 bg-[#0a65cc] text-white uppercase font-medium rounded-md hover:bg-[#0851a5] transition duration-300"
          >
            {user ? t("dashboard") : t("explore_now")}
          </button>
        </div>

        {/* Mobile menu icon */}
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

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-base-100 border-t shadow-md flex flex-col items-center gap-4 py-4 uppercase font-medium text-gray-700">
          {["Home", "About", "Jobs", "Resources"].map((name, index) => (
            <NavLink
              key={index}
              to={name === "Home" ? "/" : `/${name.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="hover:text-[#0a65cc] transition"
            >
              {t(name.toLowerCase())}
            </NavLink>
          ))}

          {/* Language Switch (mobile) */}
          <div className="flex gap-3">
            <button
              onClick={() => i18n.changeLanguage("en")}
              className="px-3 py-1 border rounded-md"
            >
              EN
            </button>
            <button
              onClick={() => i18n.changeLanguage("bn")}
              className="px-3 py-1 border rounded-md"
            >
              BN
            </button>
          </div>

          {/* Main Action Button */}
          <button
            onClick={handleButtonClick}
            className="px-5 py-2 bg-[#0a65cc] text-white rounded-md hover:bg-[#0851a5] transition"
          >
            {user ? t("dashboard") : t("explore_now")}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
