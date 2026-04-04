import React from "react";
import Layout from "../layout/Layout";

const Status = () => {
  const statusData = [
    {
      name: "Active Members",
      value: "500+",
      note: "Growing every month",
    },
    {
      name: "Years of Experience",
      value: "5+",
      note: "Certified coaching team",
    },
    {
      name: "Fitness Programs",
      value: "20+",
      note: "Strength, cardio, yoga & more",
    },
    {
      name: "Satisfied Clients",
      value: "95%",
      note: "Based on member feedback",
    },
  ];

  return (
    <Layout>
      <section className="relative mx-auto mt-14 max-w-7xl px-4 pb-4 sm:px-6 lg:mt-18 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-linear(circle_at_10%_10%,rgba(132,204,22,0.18),transparent_35%),radial-linear(circle_at_90%_20%,rgba(245,158,11,0.16),transparent_38%)]" />

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-lime-300/30 bg-lime-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-lime-200">
            Our Performance
          </span>
          <h3 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Trusted by Members,
            <span className="block bg-linear-to-r from-lime-200 via-amber-200 to-orange-200 bg-clip-text text-transparent">
              Proven by Results
            </span>
          </h3>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Real impact delivered through coaching quality, community support,
            and consistent training outcomes.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">
          {statusData.map((item) => (
            <article
              key={item.name}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-lime-300/40 hover:bg-white/10"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br from-lime-300 to-amber-300 text-2xl font-extrabold text-slate-900 shadow-md sm:h-22 sm:w-22 sm:text-3xl">
                {item.value}
              </div>
              <p className="mt-5 text-base font-bold text-white sm:text-lg">{item.name}</p>
              <p className="mt-2 text-xs text-slate-300 sm:text-sm">{item.note}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Status;
