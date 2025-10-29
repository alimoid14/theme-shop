import React from "react";

function LiveHero() {
  return (
    <>
      <section className="bg-slate-800 text-white p-16 w-full flex flex-col justify-between items-center text-center h-[60vh] sm:h-[50vh] lg:h-[calc(100vh-56px)] lg:w-[50vw]">
        <div className="text-center">
          <h1 className="text-3xl text-white font-mono leading-4">
            <span className="text-blue-400">the</span>kleaner
          </h1>
          <h2 className="font-mono font-bold text-[0.8rem] tracking-wider text-gray-400">
            CLEANING COMPANY
          </h2>
        </div>
        <div>
          <h2 className="text-4xl font-bold">
            WordPress Theme for Industrial Cleaning Companies
          </h2>
          <br></br>
          <p className="opacity-80">
            The Kleaner is the perfect theme for cleaning business & facility
            services that comes with WPBakery Page Builder and 5 star theme
            support.
          </p>
          <br></br>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded">
            &#8594; Get the Theme
          </button>
        </div>
        <div className="font-bold text-gray-500 cursor-pointer hidden lg:block bg-white/0 hover:bg-white/10 px-2 py-1 rounded-sm bg-opacity-0">
          More Info
        </div>
      </section>
    </>
  );
}

export default LiveHero;
