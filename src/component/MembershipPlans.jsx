import React from "react";
import Layout from "../Layout/Layout";
import { FaRegCheckCircle } from "react-icons/fa";


const MembershipPlans = () => {
  const plans = [
    {
      id: 1,
      title: "Basic Fitness Plan",
      price: "1999",
      subTitle: "Perfect for beginners starting their fitness journey.",
      features: [
        "Unlimited access to gym facilities",
        "Basic fitness training sessions",
        "Locker room access",
        "Sauna and steam room access",
      ],
    },
    {
      id: 2,
      title: "Standard Fitness Plan",
      price: "2999",
      subTitle:
        "Ideal for those looking to take their fitness to the next level.",
      features: [
        "Unlimited access to gym facilities",
        "Personalized fitness training sessions",
        "Locker room access",
        "Sauna and steam room access",
        "fitness assessment and progress tracking",
      ],
    },
    {
      id: 3,
      title: "Premium Fitness Plan",
      price: "4999",
      subTitle:
        "For serious fitness enthusiasts who want a comprehensive approach.",
      features: [
        "Unlimited access to gym facilities",
        "Personalized fitness training sessions",
        "Locker room access",
        "Sauna and steam room access",
        "Nutrition consultation",
      ],
    },
  ];

  const formatPrice = (amount) =>{
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  }

  return (
    <Layout>
      <div>
        <span className="program bg-gray-300 text-black p-2 px-5 rounded-full text-center block w-fit mx-auto mt-15">
          Our Popular Plans
        </span>
        <h3 className="font-bold text-4xl text-center pt-5">
          Membership plans that match <br /> your fitness journey
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-15 ">
          {plans.map((plan) => (
            <div key={plan.id} className="plan bg-amber-50 text-black p-5 rounded-2xl overflow-hidden">
              <div className="tag relative left-59 top-18 rotate-42 ">

              {plan.id === 2 && (
                <span className="bg-blue-200 p-2 px-13 rotate-x-90 text-blue-900 text-sm font-bold">
                  Popular
                </span>
              )}
              </div>
              <h4 className="text-2xl font-bold text-blue-900 pt-5">{plan.title}</h4>
              <p className="text-gray-500">{plan.subTitle}</p>
              <div className="p-3">
                <span className="text-3xl font-bold text-violet-900">{formatPrice(plan.price)}</span>
                <span className="text-gray-700">/month</span>
              </div>
              <div className="bg-amber-100 p-5 pt-2 rounded-xl">
                <ul className="my-4 space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-800">
                      <FaRegCheckCircle
                        className="mt-1 shrink-0 text-amber-600"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="bg-amber-500 text-white py-2 px-4 w-full rounded-full hover:bg-lime-600">
                  Select Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MembershipPlans;
