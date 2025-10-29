import React from "react";

function AboutHero() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-cyan-900 to-gray-800 h-[calc(100vh-56px)] md:h-[60vh] lg:h-[calc(100vh-56px)] flex justify-center items-center">
      <div className="flex flex-col text-white text-4xl lg:text-6xl font-bold text-center gap-6 w-[300px] lg:w-[500px] mx-auto">
        <div className="">
          <h1 className="text-cyan-400">We're here to</h1>
          <h1>spark</h1>
        </div>
        <p className="text-[1rem]">
          Everything we do is to empower creative professionals to thrive, with
          our suite of AI tools, unlimited access to high-quality assets, tools,
          tutorials, and more.
        </p>
      </div>
    </section>
  );
}

export default AboutHero;
