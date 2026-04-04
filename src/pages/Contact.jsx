import React from "react";
import PageHeader from "../component/PageHeader";
import Layout from "../layout/Layout";
import img from "../assets/images/getINTouch.jpeg";
import bgImg from "../assets/images/bgImg.png";
import { ImMobile } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import PrimaryBtn from "../component/button/PrimaryBtn";
import SecondaryBtn from "../component/button/SecendaryBtn";

const Contact = () => {
  return (
    <div>
      <PageHeader title="Contact Us" subTitle="Home/Contact" />
      <Layout>
        <section className="mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
              <div className="relative h-72 sm:h-80 lg:h-96">
                <img
                  src={img}
                  alt="Contact Us"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    Let&apos;s Talk About Your Fitness Goals
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-200 sm:text-base">
                    Reach out to our team for membership help, training
                    guidance, or personalized program advice.
                  </p>
                </div>
              </div>

              <div className="grid gap-3 p-5 sm:grid-cols-1 sm:p-6">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/50 p-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-300/20 text-amber-300">
                    <ImMobile className="text-lg" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
                      Mobile No.
                    </h4>
                    <p className="mt-1 text-sm text-slate-300">
                      +91 X X X X X X X X X X
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/50 p-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-300/20 text-amber-300">
                    <MdEmail className="text-lg" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
                      Email Address
                    </h4>
                    <p className="mt-1 text-sm text-slate-300">
                      info@gympro.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/50 p-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-300/20 text-amber-300">
                    <FaLocationDot className="text-lg" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
                      Our Location
                    </h4>
                    <p className="mt-1 text-sm text-slate-300">
                      123 Fitness Street, Health City, HC 12345
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article className="">
              <span className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                Get In Touch
              </span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Contact Us Today
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                Ready to begin your fitness journey? Contact GymPro today and
                let our expert trainers guide you with the right program and
                support.
              </p>

              <form className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-slate-200"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full rounded-xl border border-white/15 bg-slate-950/55 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/60"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-slate-200"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-xl border border-white/15 bg-slate-950/55 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/60"
                      placeholder="Enter your phone"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-xl border border-white/15 bg-slate-950/55 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/60"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full rounded-xl border border-white/15 bg-slate-950/55 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/60"
                    placeholder="Write subject"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full rounded-xl border border-white/15 bg-slate-950/55 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/60"
                    placeholder="Write your message"
                  ></textarea>
                </div>
                <SecondaryBtn text="Send Message" className="w-full sm:w-auto" />
              </form>
            </article>
          </div>
        </section>
      </Layout>
      <div className="w-full h-120 overflow-hidden rounded-xl bg-amber-50">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d118277.26971454934!2d87.95164583815793!3d22.119696080298297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1775210943751!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div
        className="contactBgImg relative mt-10 flex min-h-80 w-full items-center justify-center overflow-hidden rounded-3xl bg-cover bg-center px-4 py-16 text-center sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/50 via-slate-950/50 to-slate-950/90" />
        <div className="relative mx-auto max-w-4xl">
          <h3 className="mt-5 text-3xl font-extrabold leading-tight bg-clip-text text-transparent bg-linear-to-r from-blue-500 via-yellow-200 to-orange-400 sm:text-4xl lg:text-6xl">
            "Success starts with self-discipline"
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base lg:text-lg">
            Push yourself, because consistency is the key to achieving your goals.
            Small steps every day create lasting progress.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
