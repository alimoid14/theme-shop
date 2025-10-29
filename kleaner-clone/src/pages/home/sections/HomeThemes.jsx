import React from "react";
import ThemeCard from "../../../components/ui/ThemeCard";
import { themes } from "../../../data/themes";

function HomeThemes() {
  return (
    <section className="max-w-[1400px] mx-4 bg-gray-200 grid grid-cols-1 lg:gap-56 lg:grid-cols-2 pb-24">
      <div className="lg:py-8 lg:col-start-2">
        <h1 className="text-3xl pb-12 lg:col-start-2 text-center lg:text-left lg:w-[25vw]">
          Unique themes and templates for every budget and every project.
        </h1>
        <button className="py-4 px-6 bg-lime-500 hover:bg-lime-700 text-white font-bold w-fit mr-auto rounded shadow-md shadow-gray-400 hidden lg:block">
          View all Themes
        </button>
      </div>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:col-start-1 lg:row-start-1 lg:bg-gray-50 lg:w-[50vw] gap-6 p-6 rounded-2xl z-20">
        <div className="absolute w-[103%] h-[100%] bg-black/0 top-4 border-1 border-lime-700 border-dashed rounded-2xl z-0 hidden lg:block"></div>
        <div className="absolute w-[100%] h-[100%] bg-gray-100/70 z-10 rounded-2xl hidden lg:block"></div>

        {themes.map((theme) => (
          <div key={theme.name} className="z-20">
            <ThemeCard {...theme} variant="theme" />
          </div>
        ))}
      </div>
      <button className="py-4 px-6 bg-lime-500 hover:bg-lime-700 text-white font-bold w-fit mx-auto rounded shadow-md shadow-gray-400 lg:hidden">
        View all Themes
      </button>
    </section>
  );
}

export default HomeThemes;
