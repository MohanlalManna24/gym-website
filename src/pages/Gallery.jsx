import React, { useEffect, useMemo, useRef, useState } from "react";
import PageHeader from "../component/PageHeader";
import Layout from "../layout/Layout";

const Gallery = () => {
  return (
    <div>
      <PageHeader title="Gallery" subTitle="Home/Gallery" />

      <Layout>
        <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <header className="mx-auto mb-10 max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-[#7dfe00]/35 bg-[#7dfe00]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#b8ff69]">
              FitNation Moments
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Training energy captured in
              <span className="block bg-linear-to-r from-[#7dfe00] via-[#22d3ee] to-[#7dfe00] bg-clip-text text-transparent">
                photos and motion
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Explore our training floor, coaching sessions, and member
              transformations. Hover on video cards to preview the action.
            </p>
          </header>
        </section>
     </Layout>
    </div>
  );}

export default Gallery;