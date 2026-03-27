import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = ["Home", "About", "Services", "Pricing", "Gallery", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navBar select-none mx-25 bg-black md:bg-gray-500 sticky top-0 z-50">
      <Layout>
        <nav className="bg-black text-white font-semibold">
          <div className="flex items-center justify-between px-4 py-3 md:hidden">
            <h2 className="text-lg font-bold tracking-wide">Menu</h2>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-xl"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <ul className="hidden md:flex justify-center items-center gap-5 lg:gap-10 py-3 px-6">
            {navLinks.map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-lime-400 transition-colors duration-200 border-l border-white/50 pl-5 lg:pl-10"
              >
                {item}
              </li>
            ))}
          </ul>

          {isOpen && (
            <ul className="md:hidden border-t border-white/20 px-4 pb-4">
              {navLinks.map((item) => (
                <li
                  key={item}
                  className="py-2 cursor-pointer hover:text-lime-400 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </nav>
      </Layout>
    </div>
  );
};

export default Navbar;
