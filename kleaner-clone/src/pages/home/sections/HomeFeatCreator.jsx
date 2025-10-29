import React from "react";
import ThemeCard from "../../../components/ui/ThemeCard";
import { themes } from "../../../data/themes";
function HomeFeatCreator() {
  const arr = themes.slice(0, 3);
  return (
    <section className="max-w-[1400px] mb-24 mx-auto bg-gray-50 pb-12">
      <div className="px-6 lg:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 lg:col-span-3">
          <h1 className="text-3xl mb-8">Featured Creator</h1>
          <div className="lg:flex lg:flex-row lg:justify-between lg:items-center">
            <div className="flex flex-row mb-8 lg:mb-0 lg:justify-between">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWH2pQM9QQmlRm9QT81Nh7V37TqS3QOeIZfQ&s"
                alt=""
                className="w-16 lg:w-28 lg:mr-6"
              />
              <div className="flex flex-col justify-between">
                <h1 className="text-2xl">The Featured Guy</h1>
                <p className="text-gray-600">Member since eons ago</p>
                <button className="py-2 px-6 bg-lime-500 hover:bg-lime-700 text-white font-bold w-fit mr-auto rounded shadow-md shadow-gray-400 hidden lg:block">
                  View Portfolio
                </button>
              </div>
            </div>
            <p className="text-gray-600 lg:w-3/5 text-[1.25rem]">
              Our themes and templates are produced by world-class creators (or
              Authors, as we call them). Explore the best of the week.
            </p>
          </div>
        </div>
        {arr.map((theme) => (
          <div key={theme.name} className="">
            <ThemeCard {...theme} variant="theme-ft" />
          </div>
        ))}
      </div>
      <button className="py-2 px-6 bg-lime-500 hover:bg-lime-700 text-white font-bold w-fit block mx-auto rounded shadow-md shadow-gray-400 mt-4 lg:hidden">
        View Portfolio
      </button>
    </section>
  );
}

export default HomeFeatCreator;
