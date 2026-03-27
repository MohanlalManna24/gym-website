import React from "react";
import "../App.css";
import Layout from "../Layout/Layout";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa6";


const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="blackBg"></div>
      <Layout >
        <h1 className="text-xl -mt-30 md:text-6xl text-center font-bold">
          Transform Your Body, Build Your <br />{" "}
          <span className="text-lime-400">Strength</span> with{" "}
          <span className="text-yellow-500">Confidence</span>
        </h1>
        <h2 className="subHeading text-xl md:text-5xl font-bold text-center py-5 md:py-10">
        “ No Excuses, Just Results ”
        </h2>
        <p className="text-center text-shadow-black text-sm md:text-lg">
          Train smarter with professional coaching and advanced fitness
          equipment. Track your progress, <br /> stay motivated, and achieve
          your goals faster. Everything you need to become your strongest
          self—all in one place.
        </p>
        <section className="btn flex justify-center mt-10 gap-20">
          <button className="bg-orange-500">Join Now <IoIosArrowDroprightCircle className="inline"/></button>
          <button>View Plans <FaLocationArrow className="inline"/></button>
        </section>
      </Layout>
    </div>
  );
};

export default HeroSection;
