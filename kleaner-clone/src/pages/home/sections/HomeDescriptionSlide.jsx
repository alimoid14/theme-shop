import React from "react";
import { themes } from "../../../data/themes";
import ThemeCard from "../../../components/ui/ThemeCard";

function HomeDescriptionSlide() {
  return (
    <>
      <section className="bg-orange-100">
        {/*----------------PARENT WRAPPER---------*/}
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 pb-8 lg:py-12 lg:grid-cols-3">
          {/*--------------------HEADING-AND-TEXT-CONTAINER------*/}
          <div className="grid grid-cols-1 col lg:col-span-1 auto-rows-auto">
            <h1 className="text-4xl text-center py-8 lg:text-left lg:p-8 lg:row-start-2">
              The only creative subscription you need
            </h1>
            <p className="text-center px-8 mb-8 lg:text-left lg:p-8 lg-row-start-3">
              Subscribe to Envato Elements and transform your projects with
              millions of quality assets. Get unlimited downloads of Web
              Templates, Plugins, Stock Video and more.
            </p>
            <h1 className="text-4xl font-extrabold text-center lg:text-left lg:px-8 pb-8 lg:row-start-1">
              envato
            </h1>
            <button className="py-4 px-6 bg-lime-500 hover:bg-lime-700 text-white font-bold w-fit rounded shadow-md shadow-gray-400 hidden lg:block lg:mx-8">
              View envato elements
            </button>
          </div>
          {/*--------------------HEADING-AND-TEXT-CONTAINER-END------*/}
          {/* ---------------SLIDER/GRID--------------- */}
          <div className="mx-auto pb-6 flex flex-row overflow-x-scroll md:overflow-hidden md:grid md:grid-cols-2 md:gap-4 lg:col-span-2 max-w-[80vw] items-center">
            {themes.map((theme) => (
              <div
                key={theme.name}
                className="w-[40vw] shrink-0 lg:w-[25vw] mr-4 md:mr-0"
              >
                <ThemeCard {...theme} variant="theme-desc" />
              </div>
            ))}
          </div>
          {/*----------------SLIDER-END-----------*/}
          <button className="py-4 px-6 bg-lime-500 hover:bg-lime-700 text-white font-bold w-fit mx-auto rounded shadow-md shadow-gray-400 lg:hidden mt-6 lg:hdden">
            View envato elements
          </button>
        </div>
        {/*----------------PARENT WRAPPER END-----------*/}
      </section>
    </>
  );
}

export default HomeDescriptionSlide;
