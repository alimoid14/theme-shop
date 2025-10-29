import React from "react";
import { themes } from "../../../data/themes";
import ThemeCard from "../../../components/ui/ThemeCard";
function HomeNewThemes() {
  return (
    <section className="max-w-[1400px] grid grid-cols-1 gap-6 mx-6 lg:mx-auto pb-24">
      <h1 className="text-center text-4xl">
        Check out our newest themes and templates
      </h1>
      <p className="text-center">
        We carefully review new entries from our community one by one to make
        sure they meet high-quality design and functionality standards. From
        multipurpose themes to niche templates, you&apos;ll always find
        something that catches your eye.
      </p>
      <div></div>
      <div className="w-full mx-auto pb-6 flex flex-row overflow-x-scroll md:grid md:overflow-hidden md:grid-cols-2 md:gap-4 max-w-[90vw] lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] items-center">
        {themes.map((theme) => (
          <div key={theme.name} className="w-[60vw] md:w-full mr-4 md:mr-0">
            <ThemeCard {...theme} variant="theme-ft" />
          </div>
        ))}
      </div>
      <button className="py-4 px-6 bg-lime-500 hover:bg-lime-700 text-white font-bold block w-fit mx-auto rounded shadow-md shadow-gray-400 ">
        View more items
      </button>
    </section>
  );
}

export default HomeNewThemes;
