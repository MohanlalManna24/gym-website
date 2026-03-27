import React from "react";
import trainerImg1 from "../assets/trainer1.jpg";
import trainerImg2 from "../assets/trainer2.jpg";
import trainerImg3 from "../assets/trainer3.jpg";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { LiaPinterestP } from "react-icons/lia";

const Trainer = () => {
  const trainers = [
    {
      id: 1,
      name: "John Doe",
      specialization: "Strength & Conditioning",
      image: trainerImg1,
      socialMedia: {
        pinterest: "https://pinterest.com",
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
      },
    },
    {
      id: 2,
      name: "Jane Smith",
      specialization: "Yoga & Flexibility",
      image: trainerImg2,
      socialMedia: {
        pinterest: "https://pinterest.com",
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
      }
    },
    {
      id: 3,
      name: "Mike Johnson",
      specialization: "Cardio & Endurance",
      image: trainerImg3,
      socialMedia: {
        pinterest: "https://pinterest.com",
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
      },
    },
  ];

  return (
    <div className="w-full">
      <span className="bg-gray-300 text-black p-2 px-5 rounded-full text-center block w-fit mx-auto mt-15">
        {" "}
        Trainers
      </span>
      <h3 className="text-center mt-5 font-bold text-4xl">
        Meet our certified fitness <br /> Experts and Trainers
      </h3>
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {trainers.map((trainer) => (
          <div
            className="group relative w-100 h-120 rounded-2xl overflow-hidden"
            key={trainer.id}
          >
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/35 transition-colors duration-300"></div>

            <div className="absolute right-4 top-1/4 -translate-y-1/2 flex flex-col gap-3 opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-20">
              <a
                href={trainer.socialMedia.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/80 text-white bg-white/10 backdrop-blur-sm flex items-center justify-center text-2xl hover:bg-red-500 hover:border-red-500 transition-all duration-200"
              >
                <LiaPinterestP />
              </a>
              <a
                href={trainer.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/80 text-white bg-white/10 backdrop-blur-sm flex items-center justify-center text-xl hover:bg-black hover:border-black transition-all duration-200"
              >
                <CiTwitter />
              </a>
              <a
                href={trainer.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/80 text-white bg-white/10 backdrop-blur-sm flex items-center justify-center text-xl hover:bg-blue-600 hover:border-blue-600 transition-all duration-200"
              >
                <CiFacebook />
              </a>
              <a
                href={trainer.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/80 text-white bg-white/10 backdrop-blur-sm flex items-center justify-center text-xl hover:bg-linear-to-tr hover:from-pink-500 hover:to-orange-400 hover:border-transparent transition-all duration-200"
              >
                <CiInstagram />
              </a>
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-black/40"></div>

            <div className="absolute left-5 bottom-5 z-10">
              <p className="text-xl text-gray-300 ">
                <VscDebugBreakpointLog className="inline text-lime-500" />
                {trainer.specialization}
              </p>
              <h3 className="text-2xl font-bold text-white">{trainer.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainer;
