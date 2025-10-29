import React from "react";
import { features } from "../../../data/features";

function AboutPoints() {
  return (
    <section className="py-8 flex flex-col gap-6 mx-auto text-white bg-gradient-to-br from-blue-900 via-cyan-900 to-gray-800">
      {features.map((feature, index) => (
        <div
          key={feature.head_start}
          className={`relative flex flex-col gap-6 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <div className="flex-1 md:max-w-[50vw] flex overflow-hidden relative">
            <img
              src={feature.img}
              className={`w-4/5 ${
                index % 2 === 0
                  ? "mr-auto ml-0 lg:rounded-r-full"
                  : "md:ml-auto mr-0 lg:rounded-l-full"
              } md:h-full md:w-full md:max-w-none`}
            />
          </div>
          <div
            className={`w-3/5 flex-1 md:max-w-[50vw] md:max-h-none lg:text-center lg:max-h-none lg:max-w-none lg:flex lg:flex-col lg:justify-center lg:items-center lg:font-bold ${
              index % 2 === 0 ? "text-left mr-auto" : "text-right ml-auto"
            }`}
          >
            <h2 className="text-3xl font-bold lg:text-5xl lg:w-[500px]">
              <span className="text-cyan-400">{feature.head_start}</span>{" "}
              {feature.head_end}
            </h2>
            <p className="lg:w-[500px]">{feature.desc}</p>
            <button className="py-2 rounded-[0.5rem] mt-2 px-4 bg-cyan-600 text-gray-900 font-bold">
              {feature.button}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default AboutPoints;
