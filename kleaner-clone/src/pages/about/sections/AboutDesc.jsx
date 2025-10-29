import React from "react";
import { values } from "../../../data/values";

function AboutDesc() {
  return (
    <section className="pb-8 bg-stone-300">
      <div className="text-center md:font-bold md:text-left">
        <div className="w-[300px] md:w-1/2 lg:w-3/5 md:ml-0 mx-auto py-8">
          <h2 className="text-3xl font-bold md:text-5xl text-cyan-900">
            Envato's Values
          </h2>
          <p className="text-[1rem] lg:font-normal lg:text-2xl">
            Ever since 2006, Envato’s mission has always been the same, to help
            other creative people be even more creative. It’s what our Founders
            started and what we live by to this day. Want to learn more about
            Envato’s story? Read on here
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 overflow-hidden">
        <div className="flex justify-end overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1115"
            alt=""
            className="h-[200px] md:w-full md:h-auto w-auto max-w-none"
          />
        </div>
        <div className="flex flex-col justify-evenly">
          {values.map((value) => (
            <div key={value.head} className="group">
              <h3 className="font-bold text-2xl lg:text-4xl text-cyan-900">
                {value.head}
              </h3>
              <p className="invisible max-h-0 opacity-0 lg:group-hover:max-h-full lg:group-hover:visible lg:group-hover:opacity-100 transition-all duration-500 ease-in lg:w-2/3 font-bold">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutDesc;
