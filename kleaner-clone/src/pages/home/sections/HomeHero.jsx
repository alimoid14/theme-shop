import React from "react";
import { CiSearch } from "react-icons/ci";

function HomeHero() {
  return (
    <>
      <section className="bg-gray-200 text-black p-6 mb-24 grid grid-cols-1 md:grid-cols-2 max-w-[1400px] mx-auto">
        {/*---------------HEADING-DESC-AND-SEARCHBAR-CONAINER--------------*/}
        <div className="flex flex-col justify-around">
          {/*---------------HEADING---------------- */}
          <h1 className="text-[1.25rem] text-center font-bold">
            Professional WordPress Themes & Website Templates for any project
          </h1>
          {/*---------------HEADING-END--------------- */}

          {/*---------------DESCRIPTION--------------- */}
          <p className="text-[1.25rem] text-gray-700">
            Discover thousands of easy to customize themes, templates & CMS
            products, made by world-class developers.
          </p>
          {/*---------------DESCRIPTION-END--------------- */}
          {/*---------------SEARCHBAR-CONAINER-------------- */}
          <div className="w-full relative px-4 mt-6 bg-white rounded flex flex-row items-center justify-between shadow-lg shadow-gray-300">
            <input
              type="text"
              placeholder="e.g. responsive WordPress"
              className="w-[70%] py-6 decoration-none outline-none"
            />
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              <span className="inline-block">
                <CiSearch />
              </span>{" "}
              Search
            </button>
          </div>
          {/* ---------------SEARCHBAR-CONTAINER-END---------------*/}
        </div>
        {/*--------------END-HEADING-DESC-AND-SEARCHBAR-CONAINER--------------*/}

        {/* ---------------DESCRIPTION-IMAGE--------------- */}
        <div className="mt-6">
          <img
            src="https://assets.market-storefront.envato-static.com/storefront/assets/home/themeforest/hero-image--popular-items-2963d5759f434e6691a0bb5363bf2d1707c8885ab10b6dba3b0648f8c5f94da5.webp"
            alt=""
          />
        </div>
        {/*---------------DESCRIPTION-IMAGE-END--------------*/}
      </section>
    </>
  );
}

export default HomeHero;
