import React from "react";
import CategoryCard from "../../../components/ui/CategoryCard";
import { categories } from "../../../data/categories";

function HomeCategories() {
  return (
    <>
      <section className="flex flex-col pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1400px] mx-auto">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
        <button className="px-6 py-4 mx-auto bg-lime-500 hover:bg-lime-700 text-white font-bold rounded shadow-md shadow-gray-400">
          View all Categories
        </button>
      </section>
    </>
  );
}

export default HomeCategories;
