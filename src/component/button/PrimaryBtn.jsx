import React from "react";

const PrimaryBtn = ({ text, icon, onClick }) => {
  return (
    <button
      className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-linear-to-r from-orange-500 to-red-500 rounded-md group"
      onClick={onClick}
    >
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-linear-to-r from-red-5oo to-yellow-300 rounded-full group-hover:w-56 group-hover:h-56" />
      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg" />
      <span className="relative text-base font-bold group-hover:text-blue-900 group-hover:font-bold ">
        {text}
      </span>
      {icon && (
        <span className="ml-2 z-5 group-hover:text-blue-900">{icon}</span>
      )}
    </button>
  );
};

export default PrimaryBtn;
