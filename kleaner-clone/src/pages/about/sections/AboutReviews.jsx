import React from "react";
import { reviews } from "../../../data/reviews";

function AboutReviews() {
  return (
    <section className="py-8 px-4 max-w-[1400px] mx-auto flex flex-col justify-center items-center lg:px-6">
      <h1 className="text-center text-7xl font-bold">“</h1>
      <div className="flex w-full flex-row flex-nowrap overflow-x-scroll gap-6">
        {reviews.map((review) => (
          <div
            key={review.review}
            className="flex flex-col justify-between p-6 h-[300px] w-full shrink-0 font-bold md:max-w-[500px] lg:max-w-3/4 bg-stone-300 rounded-2xl lg:text-3xl"
          >
            <p className="text-2xl">{review.review}</p>
            <div className="flex flex-col">
              <span className=" text-xl lg:text-2xl">{review.author}</span>{" "}
              <span className="text-[1rem] lg:text-xl font-normal">
                {review.affiliation}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutReviews;
