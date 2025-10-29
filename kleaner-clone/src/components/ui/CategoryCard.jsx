import React from "react";

const CategoryCard = ({ title, description, image }) => {
  return (
    <div className="group bg-gray-100 flex flex-col items-center pt-12 px-12 mb-8 rounded mx-2 hover:bg-white hover:shadow-2xl hover:shadow-gray-300 overflow-hidden">
      <h1 className="text-3xl font-bold hover:underline">{title}</h1>
      <p>{description}</p>
      <div className="text-blue-500 mb-12">
        <a>Newest</a> <a>Bestsellers</a>
      </div>
      <img
        src={image}
        alt=""
        className="shadow-2xl shadow-gray-500 translate-y-[20px] transition-transform group-hover:translate-y-0 duration-500"
      />
    </div>
  );
};

export default CategoryCard;
