import React from "react";
import HeroSection from "../component/HeroSection";
import Layout from "../Layout/Layout";
import aboutUsImage1 from "../assets/image-3.jpeg";
import aboutUsImage2 from "../assets/about-us-image-2.jpg";
import bgImg from "../assets/bgImg.png";
import winnerIcon from "../assets/medal.png";
import { CgGym } from "react-icons/cg";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { LuMoveUpRight } from "react-icons/lu";
import { MdOutlineCallMissedOutgoing } from "react-icons/md";
import "../App.css";
import ProgramAndTraining from "../component/ProgramAndTraining";
import Status from "../component/Status";
import Trainer from "../component/Trainer";
import MembershipPlans from "../component/MembershipPlans";
import Testimonial from "../component/Testimonial";
import BMICalculator from "../component/BMICalculator";

const Home = () => {
  return (
    <div>
      {/*=========== Hero section ======================= */}
      <HeroSection />
      <Layout>
        <section className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-10">
          <section className="leftContainer mt-3 flex w-full lg:w-1/2 gap-3 sm:gap-5 items-end lg:items-start">
            <div className="bg-gray-400 w-2/3 sm:w-[60%] lg:w-95 h-70 sm:h-105 lg:h-130 rounded-2xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={aboutUsImage1}
                alt="About Us"
              />
            </div>
            <div className="bg-gray-400 w-1/2 sm:w-[55%] lg:w-85 h-60 sm:h-95 lg:h-120 mt-16 sm:mt-24 lg:mt-40 -ml-12 sm:-ml-16 lg:-ml-40 border-4 sm:border-8 border-black rounded-2xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={aboutUsImage2}
                alt="About Us"
              />
            </div>
          </section>
          <section className="rightContainer w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 lg:mt-10 leading-tight">
              A supportive fitness built for every Body
            </h2>
            <p className="pt-4 sm:pt-5 text-base sm:text-lg leading-relaxed">
              FitNation is more than a gym it’s a community that supports every
              fitness journey. From beginners to advanced athletes, we provide
              structured training.
            </p>
            <section className="support flex flex-col mt-8 sm:mt-10 gap-4 sm:gap-5">
              <div className="flex gap-3 sm:gap-4 items-start">
                <div className="icons w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gray-200 rounded-full flex items-center justify-center shrink-0">
                  <CgGym className="text-2xl sm:text-3xl text-gray-700" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">
                    Modern Facilities{" "}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    We offer a clean, well equipped training space with modern
                    equipment.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4 items-start">
                <div className="icons w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gray-200 rounded-full flex items-center justify-center shrink-0">
                  <MdOutlineWorkspacePremium className="text-2xl sm:text-3xl text-gray-700" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">
                    Expert Trainers
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Our certified trainers are dedicated to helping you achieve
                    your fitness goals.
                  </p>
                </div>
              </div>
            </section>
            <div className="w-full mt-6 p-4 sm:p-5 flex flex-col sm:flex-row justify-center sm:justify-between items-start sm:items-center gap-4 sm:gap-6 rounded-3xl bg-white text-black border-l-8 border-blue-400">
              <ul className="pl-5 sm:pl-6 list-disc text-base sm:text-lg lg:text-xl space-y-1">
                <li>Our certified trainers provide support.</li>
                <li>Clean space. Complete equipment.</li>
                <li>Premium equipment in a clean space</li>
              </ul>
              <div className="w-full sm:w-auto flex justify-center">
                <img
                  src={winnerIcon}
                  alt="Winner"
                  className="w-20 h-20 sm:w-24 sm:h-24 mx-auto"
                />
              </div>
            </div>
            <div>
              <button className="mt-5 flex gap-2 items-center">
                Contact Us{" "}
                <MdOutlineCallMissedOutgoing className="text-white" />{" "}
              </button>
            </div>
          </section>
        </section>
      </Layout>
      {/*=========== Program & Training ======================= */}
      <ProgramAndTraining />

      {/*=========== Achieve Amazing results section ======================= */}
      <section className="subBgImg relative w-full h-60 sm:h-75 md:h-95 lg:h-115 mt-10 md:mt-20 overflow-hidden">
        <img
          src={bgImg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
          <h3 className="text-center font-bold text-2xl sm:text-3xl md:text-5xl leading-tight text-amber-400">
            Achieve Amazing results <br /> with our Services
          </h3>
        </div>
      </section>

      {/*============= Status Section ================= */}
      <Status />

      {/*============= Trainer Section ================= */}
      <Trainer />

      {/*============= BMI Calculator Section ================= */}
      <BMICalculator />

      {/*============= Membership Plans Section ================= */}
      <MembershipPlans />

      {/*============= Testimonials Section ================= */}
      <Testimonial />
    </div>
  );
};

export default Home;
