import React from "react";
import Layout from "../Layout/Layout";

const BMICalculator = () => {
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
            <p className="text-2xl font-bold">BMI Calculator Chart</p>
            <table className="table-auto border-separate  border border-amber-500 mt-5 ">
              <thead className="text-xl font-light">
                <tr>
                  <th className="border border-amber-300 px-10 py-3">
                    BMI Range
                  </th>
                  <th className="border border-amber-300 px-10 py-3">
                    Weight Status
                  </th>
                </tr>
              </thead>
              <tbody className="text-lg font-normal text-center">
                <tr>
                  <td className="border border-amber-300 py-2">Below 18.5</td>
                  <td className="border border-amber-300 py-2">Underweight</td>
                </tr>
                <tr>
                  <td className="border border-amber-300 py-2">18.5 - 24.9</td>
                  <td className="border border-amber-300 py-2">
                    Normal Weight
                  </td>
                </tr>
                <tr>
                  <td className="border border-amber-300 py-2">25 - 29.9</td>
                  <td className="border border-amber-300 py-2">Overweight</td>
                </tr>
                <tr>
                  <td className="border border-amber-300 py-2">30 and above</td>
                  <td className="border border-amber-300 py-2">Obese</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rightContainer">
            <h3 className="text-2xl font-bold">Calculate Your BMI</h3>
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
              />
              <input
                type="number"
                placeholder="Height (cm)"
                className="bg-linear-to-r to-yellow-50 from-yellow-200 text-black px-3 py-2 font-medium rounded"
              />
              <input
                type="number"
                name="age"
                id="age"
                placeholder="Age"
                className="bg-linear-to-r to-yellow-50 from-yellow-200 text-black px-3 py-2 font-medium rounded"
              />
              <select
                name="gender"
                id="gender"
                className="bg-linear-to-r to-yellow-50 from-yellow-200 text-black px-3 py-2 font-medium rounded cursor-pointer"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Others</option>
              </select>
            </div>
            <input
              type="button"
              value="Calculate BMI"
              className="bg-linear-to-r to-yellow-50 from-yellow-200 text-black w-full mt-5 px-3 py-2 font-medium rounded cursor-pointer"
            />
            <div className="result mt-3 py-3 text-center border border-amber-200">
              Your BMI will appear here: 20.00{" "}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BMICalculator;
