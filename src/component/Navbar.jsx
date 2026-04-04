import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Pricing", path: "/pricing" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" }
];

const desktopLinkClass = ({ isActive }) =>
  isActive
    ? "text-lime-400 border-l border-white/40 pl-4 lg:pl-6"
    : "hover:text-lime-400 transition-colors duration-200 border-l border-white/40 pl-4 lg:pl-6";

const mobileLinkClass = ({ isActive }) =>
  isActive
    ? "block rounded-md bg-white/10 px-3 py-2 text-lime-400"
    : "block rounded-md px-3 py-2 hover:bg-white/10 hover:text-lime-400 transition-colors duration-200";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div className="navBar select-none sticky top-0 z-50 bg-black/95 backdrop-blur">
      <Layout>
        <nav className="text-white font-semibold">
          <div className="flex items-center justify-between px-10 py-3 md:hidden">
            <h2 className="text-base font-bold tracking-wide">Menu</h2>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-2xl border-0! p-0! rounded-none!"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <ul className="hidden md:flex justify-center items-center gap-4 lg:gap-6 py-3 px-2 lg:px-4 text-sm lg:text-base">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={desktopLinkClass}
              >
                {item.name}
              </NavLink>
            ))}
          </ul>

          {isOpen && (
            <ul
              id="mobile-nav"
              className="md:hidden border-t border-white/20 px-1 pb-3 pt-2 space-y-1"
            >
              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={mobileLinkClass}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </ul>
          )}
        </nav>
      </Layout>
    </div>
  );
};

export default Navbar;
