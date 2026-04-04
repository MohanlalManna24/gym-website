import React from "react";
import "../App.css";
import Layout from "../layout/Layout";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa6";
import SecondaryBtn from "./button/SecendaryBtn";
import PrimaryBtn from "./button/PrimaryBtn";
import { useNavigate } from "react-router-dom";


const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="heroSection">
      <div className="blackBg"></div>
      <Layout >
        <h1 className="text-xl -mt-30 md:text-6xl text-center font-bold">
          Transform Your Body, Build Your <br />{" "}
          <span className="bg-linear-to-r from-lime-400 to-yellow-200 bg-clip-text text-transparent">Strength</span> with{" "}
          <span className="bg-linear-to-r from-green-400 to-yellow-200 bg-clip-text text-transparent">Confidence</span>
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
          <PrimaryBtn text="Join Now" icon={<IoIosArrowDroprightCircle className="inline" />} onClick={() => navigate('/contact')} />
          <SecondaryBtn text="View Plans" icon={<FaLocationArrow className="inline ml-2" />} onClick={() => navigate('/pricing')} />
        </section>
      </Layout>
    </div>
  );
};

export default HeroSection;
