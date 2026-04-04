import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaPhone,
  FaLocationDot,
  FaEnvelope,
} from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  const quickLinks = ["Home", "Programs", "Membership", "Trainers", "Contact"];
  const programs = ["Strength Training", "Cardio Blast", "Yoga & Mobility", "Body Recomposition"];

  return (
    <footer className="relative mt-16 border-t border-white/10 bg-slate-950 text-slate-200">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_10%,rgba(234,179,8,0.22),transparent_35%),radial-gradient(circle_at_85%_20%,rgba(14,165,233,0.2),transparent_35%)]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-8 lg:py-14">
        <div>
          <span className="inline-block rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
            FitNation Gym
          </span>
          <h3 className="mt-4 text-2xl font-extrabold text-white">Train Strong. Live Better.</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Premium coaching, modern equipment, and a high-energy community built
            to help you become your strongest self.
          </p>

          <div className="mt-5 flex items-center gap-3">
            {[FaInstagram, FaFacebookF, FaXTwitter, FaYoutube].map((Icon, index) => (
              <a
                key={index}
                href="#"
                aria-label="social link"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-200 transition-colors duration-300 hover:border-amber-300/60 hover:bg-amber-300/15 hover:text-amber-100"
              >
                <Icon className="text-sm" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-slate-300 transition-colors hover:text-amber-200">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Top Programs</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
            {programs.map((program) => (
              <li key={program}>{program}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Stay Connected</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2.5">
              <FaLocationDot className="mt-1 shrink-0 text-amber-300" />
              <span>24 Fitness Avenue, Kolkata, India</span>
            </li>
            <li className="flex items-center gap-2.5">
              <FaPhone className="shrink-0 text-amber-300" />
              <a href="tel:+919999999999" className="transition-colors hover:text-amber-200">
                +91 99999 99999
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <FaEnvelope className="shrink-0 text-amber-300" />
              <a href="mailto:hello@fitnation.com" className="transition-colors hover:text-amber-200">
                hello@fitnation.com
              </a>
            </li>
          </ul>

          <form className="mt-5 flex w-full overflow-hidden rounded-full border border-white/15 bg-white/5">
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-slate-400 focus:outline-none"
            />
            <button
              type="submit"
              className="border-0! bg-amber-400 px-4 py-2.5 text-xs font-semibold tracking-[0.15em] text-slate-950 normal-case! hover:bg-amber-300"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-slate-400 sm:px-6 lg:px-8">
        Copyright {year} FitNation Gym. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
