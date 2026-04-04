import React from "react";
import Layout from "../layout/Layout";
import img1 from "../assets/images/aboutImg-1.jpg";
import img2 from "../assets/images/aboutImg-2.jpg";
import { GiAchievement } from "react-icons/gi";
import { GrAchievement } from "react-icons/gr";
import { GoGoal } from "react-icons/go";

const AboutUs = () => {
  return (
    <Layout>
      <div>
        <div className="container flex flex-col gap-10 mt-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="leftContainer w-full">
            <span className="inline-flex items-center rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
              Our Approach
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Built for people who want clear goals and lasting progress.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              We combine expert coaching, modern training methods, and a
              supportive environment to help every member move with confidence.
              Our focus is not just fitness for today, but habits and strength
              that last.
            </p>
            <div className="max-w-2xl rounded-3xl mt-5 border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm sm:p-5">
              <div className="mt-3 space-y-4">
                <article className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950/40 px-5 py-5 transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-300/30">
                  <div className="logo mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                    <GiAchievement className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Our Mission
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      To make high-quality fitness coaching accessible,
                      structured, and motivating for beginners and experienced
                      members alike.
                    </p>
                  </div>
                </article>

                <article className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950/40 px-5 py-5 transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-300/30">
                  <div className="logo mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                    <GrAchievement className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Our Vision
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Our vision is to become a trusted fitness destination that
                      transforms lives through smart training, expert coaching.
                    </p>
                  </div>
                </article>

                <article className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950/40 px-5 py-5 transition-transform duration-300 hover:-translate-y-1 hover:border-amber-300/30">
                  <div className="logo mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                    <GoGoal className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Our Value
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Our values to become a leading fitness community where
                      discipline, wellness, and support come together to help
                      every member achieve their
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="rightContainer flex w-full items-center justify-center lg:w-1/2">
            <div className="w-full lg:w-50 lg:h-50 bg-gray-100 rounded-full mt-60 -mr-30 border-5 border-black z-2 overflow-hidden">
              <img src={img2} alt="About Us" />
            </div>
            <div className="w-full h-70 lg:w-120 md:h-120 bg-gray-100 rounded-full overflow-hidden">
              <img src={img1} alt="About Us" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
