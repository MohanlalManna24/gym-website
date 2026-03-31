import React from "react";

const SecondaryBtn = ({ text, icon }) => {
  return (
    <button className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter border text-white border-white rounded-md group hover:text-green-900 hover:font-bold">
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-lime-300 rounded-full group-hover:w-56 group-hover:h-56" />
      <span className="relative text-base font-semibold">{text}</span>
      <span className="z-10">{icon}</span>
    </button>
  );
};

export default SecondaryBtn;
