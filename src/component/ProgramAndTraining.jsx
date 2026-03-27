import React from "react";
import Layout from "../Layout/Layout";
import strengthImg from "../assets/strengthTrainingImage.jpeg"
import groupClassImg from "../assets/groupClass.jpeg"
import flexibilityImg from "../assets/FlexibilityTraining.jpeg"
import nutritionImg from "../assets/nutrition.jpg"
import cardioImg from "../assets/cardio.jpg"
import personalImg from "../assets/download.jpeg"
import { MdModelTraining } from "react-icons/md";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaPersonRunning } from "react-icons/fa6";
import { CgGym } from "react-icons/cg";
import { HiOutlineUsers } from "react-icons/hi";
import { TbGymnastics } from "react-icons/tb";
import { RiFocus2Line } from "react-icons/ri";
import "../App.css";

const ProgramAndTraining = () => {

    const trainingPrograms = [
        {
            id: 1,
            icon: <MdModelTraining className="w-7 h-7" />,
            title: "Strength Training",
            description: "Strength training programs designed for all fitness levels using modern equipment.",
            bgImage: strengthImg
        },
        {
            id: 2,
            icon: <RiFocus2Line className="w-7 h-7" />,
            title: "Cardio Training",
            description: "Boost heart health and stamina with guided cardio sessions that include treadmill.",
            bgImage: cardioImg
        },
        {
            id: 3,
            icon: <CgGym className="w-7 h-7" />,
            title: "Flexibility Training",
            description: "Improve your flexibility and range of motion with our comprehensive flexibility training program.",
            bgImage: flexibilityImg
        },
        {
            id: 4,
            icon: <FaPersonRunning className="w-7 h-7" />,
            title: "Personal Training",
            description: "Get personalized fitness guidance and support from our expert trainers to achieve your goals faster.",
            bgImage: personalImg
        },
        {
            id: 5,
            icon: <HiOutlineUsers className="w-7 h-7" />,
            title: "Group Classes",
            description: "Join our energetic group classes for a fun and motivating workout experience that suits all fitness levels.",
            bgImage: groupClassImg
        },
        {
            id: 6,
            icon: <TbGymnastics className="w-7 h-7" />,
            title: "Nutrition Coaching",
            description: "Receive personalized nutrition coaching to complement your fitness routine and achieve optimal results.",
            bgImage: nutritionImg
        },

    ]

  return (
    <div className="mt-20 ">
      <Layout className="flex justify-center">
        <span className="program bg-gray-300 text-black p-2 px-5 rounded-full text-center block w-fit mx-auto">
          Our Program & Training
        </span>
        <h2 className="text-center font-bold text-4xl pt-7">
          Professional Training Program <br /> for stronger health
        </h2>

        <section className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-center items-center">
            {trainingPrograms.map((item) => (
                <div key={item.id} className="training-card group relative h-96 rounded-3xl overflow-hidden cursor-pointer">
                    {/* Default State - Light Background */}
                    <div className="absolute inset-0 bg-gray-200 p-8 sm:p-10 flex flex-col justify-between z-20 group-hover:opacity-0 transition-opacity duration-300">
                        <div className="flex flex-col gap-4">
                            <div className="bg-lime-400 rounded-full w-14 h-14 flex items-center justify-center text-black">
                                {item.icon }
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-black">{item.title}</h3>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{item.description}</p>
                        </div>
                        <button className="flex items-center gap-2 text-black font-semibold hover:gap-3 transition-all">
                            View Program
                            <MdOutlineArrowOutward className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Background Image */}
                    <img 
                        src={item.bgImage} 
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    {/* Dark Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Text Overlay on Hover */}
                    <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-end z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-white text-sm sm:text-base leading-relaxed mb-6">{item.description}</p>
                        <button className="flex items-center gap-2 text-lime-400 font-semibold hover:gap-3 transition-all w-fit">
                            View Program
                            <MdOutlineArrowOutward className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            ))}
        </section>

      </Layout>
    </div>
  );
};

export default ProgramAndTraining;
