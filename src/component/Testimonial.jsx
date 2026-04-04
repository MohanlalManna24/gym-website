import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Layout from "../layout/Layout";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      feedback:
        "FitNation has transformed my fitness journey. The trainers are knowledgeable and supportive, and the community is incredibly motivating. I've seen amazing results in just a few months!",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      feedback:
        "Joining FitNation was the best decision I ever made. The personalized approach and supportive environment have helped me achieve goals I never thought possible.",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Michael Johnson",
      feedback:
        "FitNation's community is amazing! The trainers are top-notch, and the variety of classes keeps me motivated. I've made great friends here too!",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    {
      id: 4,
      name: "Emily Davis",
      feedback:
        "FitNation has been a game-changer for me. The supportive community and expert trainers have helped me stay consistent and achieve my fitness goals.",
      image: "https://randomuser.me/api/portraits/women/17.jpg",
    },
    {
      id: 5,
      name: "David Wilson",
      feedback:
        "FitNation has exceeded my expectations in every way. The facilities are top-notch, and the staff is always helpful and encouraging.",
      image: "https://randomuser.me/api/portraits/men/19.jpg",
    },
    {
      id: 6,
      name: "Sarah Brown",
      feedback:
        "I love being part of the FitNation community. The trainers are fantastic, and the variety of classes keeps me motivated and engaged.",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
    },
  ];

  return (
    <Layout>
      <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.22),transparent_35%),radial-gradient(circle_at_80%_5%,rgba(234,179,8,0.2),transparent_35%)]" />

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-sky-300/30 bg-sky-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
            Member Stories
          </span>
          <h3 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Success stories from
            <span className="block bg-linear-to-r from-cyan-200 via-sky-200 to-amber-200 bg-clip-text text-transparent">
              our FitNation community
            </span>
          </h3>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            Real feedback from members who trained consistently and achieved
            measurable progress.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-7">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/40 hover:bg-white/10"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-14 w-14 rounded-2xl border border-white/20 object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-slate-300">Verified Member</p>
                  </div>
                </div>
                <FaQuoteLeft
                  className="text-xl text-sky-300/80"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-200">
                {testimonial.feedback}
              </p>

              <div className="mt-5 flex items-center gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} className="text-sm" aria-hidden="true" />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Testimonial;
