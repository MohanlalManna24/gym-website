import React from "react";
import Layout from "../Layout/Layout";
import bgImg from "../assets/bgImg.png";

const PageHeader = ({ title = "Default Title", subTitle, image = bgImg }) => {
  return (
    <>
      <div
        className="bg-gray-200 w-full h-80 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="text-center ">
          <h2 className="text-5xl font-extrabold text-blue-700">{title}</h2>
          <h6 className="text-lg text-gray-100 ">{subTitle}</h6>
        </div>
      </div>
      <Layout></Layout>
    </>
  );
};

export default PageHeader;
