import React from "react";
import { themes } from "../../data/themes";
import ThemeCard from "../../components/ui/ThemeCard";

function BuyThemes() {
  const allThemes = [...themes];
  return (
    <section className="">
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold h-[50vh] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-cyan-400 flex justify-center items-center">
        <h1
          className="max-w-[300
        px] md:max-w-[450px] lg:max-w-[500px] text-center"
        >
          Choose from the best collection of themes!
        </h1>
      </div>
      <div className="max-w-[1400px] mx-auto py-8 px-4 lg:px-6 lg:py-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {allThemes.map((theme) => (
          <div key={theme.name} className="">
            <ThemeCard {...theme} variant="theme-ft" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default BuyThemes;
