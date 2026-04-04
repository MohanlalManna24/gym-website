import React from "react";
import Layout from "../layout/Layout";
import { FaRegCheckCircle } from "react-icons/fa";


const MembershipPlans = () => {
  const plans = [
    {
      id: 1,
      title: "Basic Fitness Plan",
      price: "1999",
      badge: "Starter",
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
      badge: "Most Popular",
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
      badge: "Elite",
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

  const formatPrice = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Layout>
      <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-linear(circle_at_20%_20%,rgba(245,158,11,0.25),transparent_40%),radial-linear(circle_at_80%_10%,rgba(59,130,246,0.2),transparent_40%)]" />

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
            Our Popular Plans
          </span>
          <h3 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Membership plans that match
            <span className="block bg-linear-to-r from-amber-200 via-orange-300 to-rose-300 bg-clip-text text-transparent">
              your fitness journey
            </span>
          </h3>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            Flexible pricing, personalized support, and premium facilities to
            help you stay consistent.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan) => {
            const isFeatured = plan.id === 2;

            return (
              <article
                key={plan.id}
                className={`relative overflow-hidden rounded-3xl border p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-7 ${
                  isFeatured
                    ? "border-amber-300/70 bg-linear-to-b from-amber-100 to-orange-100 text-slate-900 lg:-mt-4"
                    : "border-white/10 bg-white/5 text-white backdrop-blur-sm"
                }`}
              >
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest ${
                    isFeatured
                      ? "bg-slate-900 text-amber-300"
                      : "bg-white/10 text-slate-200"
                  }`}
                >
                  {plan.badge}
                </span>

                <h4 className="mt-4 text-2xl font-bold sm:text-3xl">{plan.title}</h4>
                <p
                  className={`mt-3 text-sm leading-6 ${
                    isFeatured ? "text-slate-700" : "text-slate-300"
                  }`}
                >
                  {plan.subTitle}
                </p>

                <div className="mt-6 flex items-end gap-2">
                  <span className="text-3xl font-extrabold sm:text-4xl">
                    {formatPrice(plan.price)}
                  </span>
                  <span
                    className={`pb-1 text-sm font-medium ${
                      isFeatured ? "text-slate-700" : "text-slate-400"
                    }`}
                  >
                    /month
                  </span>
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className={`flex items-start gap-3 text-sm leading-6 ${
                        isFeatured ? "text-slate-800" : "text-slate-200"
                      }`}
                    >
                      <FaRegCheckCircle
                        className={`mt-1 shrink-0 ${
                          isFeatured ? "text-amber-600" : "text-amber-300"
                        }`}
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full rounded-full px-5 py-3 text-sm font-semibold normal-case! tracking-normal! transition-all duration-300 border-0! ${
                    isFeatured
                      ? "bg-slate-900 text-white hover:bg-slate-800"
                      : "bg-amber-400 text-slate-900 hover:bg-amber-300"
                  }`}
                >
                  Select Plan
                </button>
              </article>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default MembershipPlans;
