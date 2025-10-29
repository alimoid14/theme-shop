import React from "react";
import ThemeCard from "../../../components/ui/ThemeCard";
import { themes } from "../../../data/themes";

function HomeFeaturedThemes() {
  return (
    <>
      <section className="max-w-[1400px] mx-4 bg-gray-200 grid grid-cols-1 lg:grid-cols-3 gap-8 pb-24 lg:mx-auto">
        <div className="col-span-1 relative flex flex-col justify-around">
          {/* ---------------OVERLAY--------------- */}
          <div className="hidden w-[100%] h-[100%] absolute bg-gray-50/70 lg:block z-10 rounded"></div>
          <div className="hidden w-[100%] h-[100%] absolute bg-transparent border-1 border-lime-700 border-dashed lg:block top-4 left-4 z-0 rounded"></div>
          {/*-------------------HEADING-AND-TEXT-------- */}
          <div className="relative z-20 lg:w-[70%] lg:mx-auto lg:my-auto">
            <h1 className="text-3xl text-center lg:text-left">
              Featured Themes
            </h1>
            <p className="text-[1.25rem] text-gray-700 text-center pt-8 lg:text-left">
              Every week, our staff personally hand-pick some of the best new
              website themes from our collection.
            </p>
            <button className="py-4 px-6 bg-lime-500 hover:bg-lime-700 text-white font-bold w-fit rounded shadow-md shadow-gray-400 hidden lg:inline-block mt-8">
              View featured Themes
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2">
          {themes.map((theme) => (
            <div key={theme.name} className="">
              <ThemeCard {...theme} variant="theme-ft" />
            </div>
          ))}
        </div>
        <button className="py-4 px-6 bg-lime-500 hover:bg-lime-700 text-white font-bold w-fit mx-auto rounded shadow-md shadow-gray-400 lg:hidden">
          View featured Themes
        </button>
      </section>
    </>
  );
}

export default HomeFeaturedThemes;
