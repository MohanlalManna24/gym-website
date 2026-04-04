import React from "react";
import Layout from "../Layout/Layout";
import { IoLocation, IoMail } from "react-icons/io5";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import logo from "../assets/logo/logo.png";

const Header = () => {

  // { Social media URLs}
  const faceboolkUrl = "https://www.facebook.com";
  const instagramUrl = "https://www.instagram.com";
  const twitterUrl = "https://twitter.com";

  return (
    <div className="bg-linear-to-r from-gray-900 via-indigo-300 to-blue-950">
      <Layout>
        <div className="hidden md:flex justify-between py-3 ">
          <section>
            <h1 className="font-serif font-extrabold text-3xl bg-linear-to-r from-cyan-400 to-blue-200 bg-clip-text text-transparent text-shadow-amber-500 cursor-default">
              <img src={logo} alt="FitNation Logo" className="w-10 h-10 mr-2 inline" />
              FitNation
            </h1>
          </section>
          <section className="hidden lg:flex items-center gap-2 text-black cursor-pointer">
            <div className="flex items-center gap-2 border border-violet-600/50 rounded-full bg-sky-300/20 px-3 py-1 hover:bg-sky-300/40 transition-colors duration-300">
              <IoLocation className="text-orange-700 text-2xl" />
              <span>
                123 Fitness Street, Health City
              </span>
            </div>
            <div className="flex items-center gap-2 border border-violet-600/50 rounded-full bg-sky-300/20 py-1 px-5 hover:bg-sky-300/40 transition-colors duration-300">
              <IoMail className="text-blue-700 text-2xl" />
              <span>
                fitnation@gmail.com
              </span>
            </div>
          </section>
          <section className="flex items-center gap-6">
            <a
              href={faceboolkUrl}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-linear-to-br from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-700 transform transition-all duration-300 hover:scale-110 active:scale-100"
              aria-label="Facebook"
              target="_blank"
            >
              <FaFacebook className="text-lg" />
            </a>
            <a
              href={instagramUrl}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-linear-to-br from-orange-400 via-pink-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:from-orange-500 hover:via-pink-600 hover:to-purple-700 transform transition-all duration-300 hover:scale-110 active:scale-100"
              aria-label="Instagram"
              target="_blank"
            >
              <FaInstagram className="text-lg" />
            </a>
            <a
              href={twitterUrl}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-linear-to-br from-gray-700 to-gray-800 text-white shadow-lg hover:shadow-xl hover:from-gray-800 hover:to-gray-900 transform transition-all duration-300 hover:scale-110 active:scale-100"
              aria-label="Twitter"
              target="_blank"
            >
              <BsTwitterX className="text-lg" />
            </a>
          </section>
        </div>
      </Layout>

      {/* ===================== mobile view ============================= */}
      <section className="flex items-center justify-around py-3 md:hidden">
        <h1 className="font-serif font-extrabold text-2xl bg-linear-to-r from-cyan-400 to-blue-200 bg-clip-text text-transparent text-shadow-amber-500">
          FitNation
        </h1>
        <div className="icons flex items-center gap-4">
          <a
            href={faceboolkUrl}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-linear-to-br from-blue-500 to-blue-600 text-white shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transform transition-all duration-300 hover:scale-110 active:scale-100"
            target="_blank"
            aria-label="Facebook"
          >
            <FaFacebook className="text-sm" />
          </a>
          <a
            href={instagramUrl}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-linear-to-br from-orange-400 via-pink-500 to-purple-600 text-white shadow-md hover:shadow-lg hover:from-orange-500 hover:via-pink-600 hover:to-purple-700 transform transition-all duration-300 hover:scale-110"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram className="text-sm" />
          </a>
          <a
            href={twitterUrl}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-linear-to-br from-gray-700 to-gray-800 text-white shadow-md hover:shadow-lg hover:from-gray-800 hover:to-gray-900 transform transition-all duration-300 hover:scale-110"
            target="_blank"
            aria-label="Twitter"
          >
            <BsTwitterX className="text-sm" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Header;
