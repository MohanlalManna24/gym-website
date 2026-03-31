import React, { useState } from "react";
import Layout from "../Layout/Layout";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");

  const bmiValue = Number(bmi);
  
  const calculateBMI = () => {
    if (weight && height && age && gender) {
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      setBmi(bmi.toFixed(2));
    }
  };
  
  const category = (bmi) => {
    if (0 < bmi && bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Normal Weight";
    } else if (bmi >= 25 && bmi < 30) {
      return "Overweight";
    } else if (bmi >= 30) {
      return "Obese";
    } else {
      return "";
    }
  };
  const bmiStatus = category(bmiValue);
  const hasResult = bmi !== "";


  const resetForm = () => {
    setWeight("");
    setHeight("");
    setAge("");
    setGender("");
    setBmi("");
  };


  const getStatusStyle = (status) => {
    if (status === "Underweight") {
      return "border-blue-400/40 bg-blue-500/10 text-blue-300";
    }
    if (status === "Normal Weight") {
      return "border-emerald-400/40 bg-emerald-500/10 text-emerald-300";
    }
    if (status === "Overweight") {
      return "border-yellow-400/40 bg-yellow-500/10 text-yellow-300";
    }
    if (status === "Obese") {
      return "border-red-400/40 bg-red-500/10 text-red-300";
    }
    return "border-gray-600 bg-gray-800/60 text-gray-300";
  };

  const getBmiPointerPosition = (value) => {
    if (!value || value <= 0) {
      return 0;
    }
    const normalized = (value / 40) * 100;
    return Math.max(0, Math.min(normalized, 100));
  };

  return (
    <Layout>
      <section className="py-10 m-auto mt-10 ">
        <div className="flex justify-center">
          <div className="inline-flex items-center rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
            BMI Calculator
          </div>
        </div>
        <div className="container flex justify-center gap-15 mt-10">
          <div className="leftContainer">
            {/* BMI Chart Section */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 shadow-2xl hover:shadow-amber-500/5 transition-all duration-300">
              <h2 className="text-2xl font-bold bg-linear-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-4">
                BMI Classification
              </h2>
              <p className="text-sm text-gray-400 mb-6">
                World Health Organization (WHO) classification standards
              </p>

              <div className="overflow-x-auto">
                <table className="w-110">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 text-amber-400 font-semibold">
                        BMI Range
                      </th>
                      <th className="text-left py-3 px-4 text-amber-400 font-semibold">
                        Weight Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors">
                      <td className="py-3 px-4">Below 18.5</td>
                      <td className="py-3 px-4 text-blue-400">Underweight</td>
                    </tr>
                    <tr className="border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors">
                      <td className="py-3 px-4">18.5 - 24.9</td>
                      <td className="py-3 px-4 text-green-400">
                        Normal Weight
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors">
                      <td className="py-3 px-4">25 - 29.9</td>
                      <td className="py-3 px-4 text-yellow-400">Overweight</td>
                    </tr>
                    <tr className="hover:bg-gray-700/30 transition-colors">
                      <td className="py-3 px-4">30 and above</td>
                      <td className="py-3 px-4 text-red-400">Obese</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="rightContainer">
            <h3 className="text-2xl font-bold bg-linear-to-r from-cyan-200 via-amber-300 to-amber-200 bg-clip-text text-transparent">Calculate Your BMI</h3>
            <p className="text-sm font-normal text-gray-400">
              BMI (Body Mass Index) is a simple measurement that uses a person’s
              weight and height to determine whether <br /> they have a healthy
              body weight.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-5">
              <input
                type="number"
                placeholder="Weight (kg)"
                className="bg-linear-to-r to-yellow-50 from-yellow-200 text-black px-3 py-2 font-medium rounded"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Height (cm)"
                className="bg-linear-to-r to-yellow-50 from-yellow-200 text-black px-3 py-2 font-medium rounded"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
              <input
                type="number"
                name="age"
                id="age"
                placeholder="Age"
                className="bg-linear-to-r to-yellow-50 from-yellow-200 text-black px-3 py-2 font-medium rounded"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
              <select
                name="gender"
                id="gender"
                className="bg-linear-to-r to-yellow-50 from-yellow-200 text-black px-3 py-2 font-medium rounded cursor-pointer"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Others</option>
              </select>
            </div>
            <div className="btn flex gap-5">
              <input
                type="button"
                value="Calculate BMI"
                className="bg-linear-to-r to-yellow-50 from-yellow-200 text-black w-full mt-5 px-3 py-2 font-medium rounded cursor-pointer transition-all duration-200 hover:from-yellow-100 hover:to-yellow-300 hover:shadow-lg hover:shadow-amber-300/30 active:translate-y-0.5 active:scale-[0.99] active:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70"
                onClick={calculateBMI}
              />
              <input
                type="button"
                value="Reset"
                className="border-2 mt-5 border-gray-500 text-gray-400 px-3 py-2 font-medium rounded cursor-pointer transition-all duration-200 hover:border-amber-300 hover:text-amber-200 hover:bg-amber-300/10 active:translate-y-0.5 active:scale-[0.99] active:bg-amber-300/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/60"
                onClick={resetForm}
              />
            </div>

            <div className="result mt-5 rounded-2xl border border-gray-700 bg-gray-800/60 p-5 shadow-xl backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.18em] text-amber-300/80">
                Your Result
              </p>

              {hasResult ? (
                <div className="mt-4 space-y-4">
                  <div className="rounded-xl border border-gray-700/80 bg-gray-900/40 p-4">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.14em] text-gray-400">
                          Body Mass Index
                        </p>
                        <p className="mt-2 text-4xl font-bold leading-none text-white">
                          {bmi}
                        </p>
                      </div>
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${getStatusStyle(
                          bmiStatus,
                        )}`}
                      >
                        {bmiStatus}
                      </span>
                    </div>

                    <div className="mt-4">
                      <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-wider text-gray-400">
                        <span>BMI Scale</span>
                        <span>Healthy: 18.5 - 24.9</span>
                      </div>
                      <div className="relative h-2 rounded-full bg-linear-to-r from-blue-400 via-emerald-400 via-60% to-red-500">
                        <span
                          className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-white bg-gray-950 shadow-md"
                          style={{
                            left: `calc(${getBmiPointerPosition(bmiValue)}% - 8px)`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="mt-3 text-sm text-gray-400">
                  Enter your details and click{" "}
                  <span className="font-semibold text-amber-200">
                    Calculate BMI
                  </span>{" "}
                  to view your result.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BMICalculator;
