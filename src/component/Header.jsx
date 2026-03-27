import React from "react";
import Layout from "../Layout/Layout";
import { IoLocation, IoMail } from "react-icons/io5";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Header = () => {
  return (
    <div className="bg-linear-to-r from-gray-900 via-indigo-200 to-blue-950">
      <Layout>
        <div className="hidden md:flex justify-between py-3 ">
          <section>
            <h1 className="font-serif font-extrabold text-2xl">FitNation</h1>
          </section>
          <section className="flex items-center gap-2 text-black">
            <IoLocation className="text-orange-700 text-2xl" />
            <span>123 Fitness Street, Health City</span>
            <IoMail className="text-blue-700 text-2xl" />
            <span>fitnation@gmail.com</span>
          </section>
          <section className="flex items-center gap-5">
            <FaFacebook className="text-blue-500 text-xl" />
            <FaInstagram className="text-orange-400 text-xl" />
            <BsTwitterX className="text-gray-300 text-xl" />
          </section>
        </div>
      </Layout>

      {/* ===================== mobile view ============================= */}
      <section className="flex items-center justify-around py-3 md:hidden">
        <h1>FitNation</h1>
        <div className=" icons flex items-center gap-3 ">
          <IoLocation className="text-orange-700 text-2xl" />
          <IoMail className="text-blue-700 text-2xl" />
          <FaFacebook className="text-blue-800 text-xl" />
          <FaInstagram className="text-orange-800 text-xl" />
          <BsTwitterX className="text-gray-200 text-xl" />
        </div>
      </section>
    </div>
  );
};

export default Header;
