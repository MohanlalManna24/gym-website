import React from "react";
import Layout from "../Layout/Layout";

const Status = () => {
  const statusData = [
    {
      name: "Active Members",
      value: "500+",
    },
    {
      name: "Years of Experience",
      value: "5+",
    },
    {
      name: "Fitness Programs",
      value: "20+",
    },
    {
      name: "Satisfied Clients",
      value: "95%",
    },
  ];

  return (
    <Layout>
      <div className="mt-15 flex flex-col sm:flex-row justify-around gap-10 sm:gap-8">
        {statusData.map((item) => {
          return (
            <div key={item.name} className="flex flex-col items-center justify-center">
              <h3 className="text-3xl sm:text-4xl font-bold bg-linear-to-br from-lime-400 to-lime-300 text-black rounded-full p-6 w-24 h-24 flex items-center justify-center">
                {item.value}
              </h3>
              <p className="text-center pt-6 font-extrabold text-lg sm:text-xl">{item.name}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Status;
