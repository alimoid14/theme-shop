import React from "react";

const HoverCard = ({ image, title }) => {
  return (
    <>
      <div className="group w-fit flex flex-col items-center text-center text-2xl hover:text-blue-800 hover:cursor-pointer">
        <div className="relative w-fit">
          <img
            src={image}
            alt={title}
            className="lg:w-[428.4px] group-hover:shadow-lg group-hover:shadow-gray-300 transition-shadow duration-300"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/0 group-hover:bg-black/20 flex transition-all duration-500 flex-row justify-center items-center">
            <button className="bg-white text-black translate-y-[50px] opacity-0 transition-all group-hover:opacity-100 group-hover:translate-y-0 duration-500 px-6 py-4 rounded text-[1rem] font-bold">
              View Demo
            </button>
          </div>
        </div>

        <br />
        <span className="font-bold">
          {title}{" "}
          <span className="inline-block opacity-0 -translate-x-[10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
            &#8594;
          </span>
        </span>
      </div>
    </>
  );
};

export default HoverCard;
