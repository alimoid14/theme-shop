import React from "react";
import { themes } from "../../../data/themes";
import ThemeCard from "../../../components/ui/ThemeCard";

function HomeDescriptionSlideTwo() {
  return (
    <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 max-w-[1400px] mx-auto py-24">
      <div className="mx-auto relative">
        <h1 className="text-3xl px-8 text-center lg:w-[80%] lg:ml-auto">
          We're the largest theme marketplace in the world
        </h1>
        <div className="text-[0.9rem] mx-8 pt-8 flex flex-col sm:justify-evenly sm:flex-row sm:flex-wrap lg:flex-nowrap lg:absolute lg:w-[105%] lg:right-0 z-30 lg:bottom-0">
          <div className="bg-gray-50 flex flex-row w-full py-6 pl-6 rounded-2xl mx-auto sm:w-2/5 lg:flex-col">
            <img
              src="https://assets.market-storefront.envato-static.com/storefront/assets/home/value-prop-icons/popular-0e4b4113a86af83586b8bfec31da9b73f773837dd936168f719a8ab3c3d3bf9a.svg"
              alt=""
              className="w-12 flex-none"
            />
            <p className="my-auto px-6">
              Home of the most popular themes in the world
            </p>
          </div>
          <div className="bg-gray-50 flex flex-row w-full py-6 pl-6 rounded-2xl mx-auto mt-8 sm:mt-0 sm:w-2/5 lg:flex-col lg:mx-6">
            <img
              src="https://assets.market-storefront.envato-static.com/storefront/assets/home/value-prop-icons/support-8f9ed08357bca18207252cd261f5ab3990a1ac33dbec78751eaa480ad89d3ac4.svg"
              alt=""
              className="w-12 flex-none"
            />
            <p className="my-auto px-6">
              Clear documentation and theme support available
            </p>
          </div>
          <div className="bg-gray-50 flex flex-row w-full py-6 pl-8 rounded-2xl mx-auto sm:w-2/5 my-6 lg:flex-col lg:my-0">
            <img
              src="https://assets.market-storefront.envato-static.com/storefront/assets/home/value-prop-icons/quality-cdf81e8e618357620fcc22f6474aa4c47de3c439a239de26b9dcf13c74b1a96e.svg"
              alt=""
              className="w-12 flex-none"
            />
            <p className="my-auto px-6">Quality reviewed creators and items</p>
          </div>
        </div>
      </div>
      <div className="relative hidden lg:grid lg:grid-cols-2 lg:col-start-1 lg:row-start-1 lg:bg-gray-50 lg:w-[50vw] gap-6 p-6 rounded-2xl z-20">
        <div className="absolute w-[103%] h-[100%] bg-black/0 top-4 border-1 border-lime-700 border-dashed rounded-2xl z-0 hidden lg:block"></div>
        <div className="absolute w-[100%] h-[100%] bg-gray-100/70 z-10 rounded-2xl hidden lg:block"></div>

        {themes.map((theme) => (
          <div key={theme.name} className="z-20">
            <ThemeCard {...theme} variant="theme" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeDescriptionSlideTwo;
