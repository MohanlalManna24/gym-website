import React from "react";
import bgImg from "../assets/images/bg.png";

const PageHeader = ({ title = "Default Title", subTitle, image = bgImg }) => {
  return (
    <section className="relative isolate w-full overflow-hidden">
      <div
        className="relative flex min-h-80 items-center justify-center bg-cover bg-center px-4 py-14 sm:min-h-90 sm:px-6 lg:min-h-105 lg:px-8"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/55 via-slate-950/45 to-slate-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(56,189,248,0.25),transparent_34%),radial-gradient(circle_at_86%_10%,rgba(251,191,36,0.24),transparent_30%)]" />

        <div className="relative z-10 mx-auto w-full max-w-5xl text-center">

          <span className="mt-5 text-4xl font-black leading-tight tracking-tight bg-linear-to-r from-blue-500 via-yellow-300 to-purple-500 text-transparent bg-clip-text  sm:text-5xl lg:text-7xl">
            {title}
          </span>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-linear-to-r from-cyan-300 via-amber-300 to-orange-400" />

          {subTitle && (
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium tracking-wide text-slate-200 sm:text-base">
              {subTitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
