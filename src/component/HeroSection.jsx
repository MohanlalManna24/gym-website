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
        <div className="flex flex-col items-center justify-center min-h-screen">
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-bold px-4 leading-tight mb-4 md:mb-6">
            Transform Your Body, Build Your{" "}
            <span className="bg-linear-to-r from-lime-400 to-yellow-200 bg-clip-text text-transparent block sm:inline">Strength</span> with{" "}
            <span className="bg-linear-to-r from-green-400 to-yellow-200 bg-clip-text text-transparent block sm:inline">Confidence</span>
          </h1>

          {/* Subheading */}
          <h2 className="subHeading text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center py-3 md:py-6 px-4">
          No Excuses, Just Results
          </h2>

          {/* Description */}
          <p className="text-center text-shadow-black text-xs sm:text-sm md:text-base lg:text-lg px-4 max-w-2xl leading-relaxed mb-8 md:mb-10">
            Train smarter with professional coaching and advanced fitness equipment. Track your progress, stay motivated, and achieve your goals faster. Everything you need to become your strongest self—all in one place.
          </p>

          {/* Buttons */}
          <section className="btn flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8">
            <PrimaryBtn text="Join Now" icon={<IoIosArrowDroprightCircle className="inline" />} onClick={() => navigate('/contact')} />
            <SecondaryBtn text="View Plans" icon={<FaLocationArrow className="inline ml-2" />} onClick={() => navigate('/pricing')} />
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default HeroSection;
