import React, { useState } from "react";
import Layout from "../Layout/Layout";
import img3 from "../assets/images/img-3.jpeg";
import { FaCircleArrowDown } from "react-icons/fa6";
import { FaCircleArrowUp } from "react-icons/fa6";

const AskQns = () => {
  const [activeId, setActiveId] = useState(1);
  const handelClick = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };
  const questions = [
    {
      id: 1,
      question: "Q1: What are the gym's operating hours?",
      answer:
        "Ans: Our gym is open from 6:00 AM to 10:00 PM, Monday to Sunday.",
    },
    {
      id: 2,
      question: "Q2: Do you offer personal training sessions?",
      answer:
        "Ans: Yes, we have certified personal trainers available for one-on-one sessions. Please contact our front desk for more information and scheduling.",
    },
    {
      id: 3,
      question: "Q3: What types of membership plans do you offer?",
      answer:
        "Ans: We offer monthly, quarterly, and annual membership plans. We also have family and student discounts. Please visit our pricing page for more details.",
    },
    {
      id: 4,
      question: "Q4: Is there a trial period for new members?",
      answer:
        "Ans: Yes, we offer a 7-day free trial for new members. You can sign up at our front desk or through our website.",
    },
    {
      id: 5,
      question: "Q5: What safety measures are in place at the gym?",
      answer:
        "Ans: We have implemented strict cleaning protocols, social distancing guidelines, and require all members to wear masks in common areas. We also provide hand sanitizers throughout the facility.",
    },
  ];

  return (
    <Layout>
      <div className="container flex flex-col gap-10 py-10 lg:flex-row lg:items-center lg:gap-20">
        <div className="w-full overflow-hidden rounded-2xl bg-amber-50 lg:w-1/2">
          <img
            src={img3}
            alt="Ask Questions"
            className="h-72 w-full object-cover sm:h-96 lg:h-155"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <span className="inline-flex rounded-full border border-amber-200 px-3 py-1 text-amber-100 bg-linear-to-r from-amber-400/20 to-amber-50/20 text-xs sm:text-sm">
            Frequently Asked Questions
          </span>
          <h2></h2>
          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Common questions about gym, and training
          </h2>
          <div className="mt-5 space-y-4 select-none">
            {questions.map((q) => (
              <article key={q.id} className="group">
                <div
                  className="flex items-start justify-between gap-4 border-b border-amber-50 py-4 sm:py-5 cursor-pointer group transition-all duration-300"
                  onClick={() => {
                    handelClick(q.id);
                  }}
                >
                  <h3 className="text-base font-semibold text-white group-hover:text-amber-200 sm:text-lg">
                    {q.question}
                  </h3>
                  <div className="icon">
                    {activeId === q.id ? (
                      <FaCircleArrowUp className="text-xl text-amber-300/80 group-hover:text-amber-400 sm:text-2xl" />
                    ) : (
                      <FaCircleArrowDown className="text-xl text-amber-300/80 group-hover:text-amber-400 sm:text-2xl" />
                    )}
                  </div>
                </div>
                {activeId === q.id && (
                  <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
                    {q.answer}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AskQns;
