import React from "react";
import HoverCard from "../../../components/ui/HoverCard";

function LiveList() {
  return (
    <>
      <section className="flex flex-col items-center text-center lg:h-[calc(100vh-56px)] overflow-scroll overflow-x-clip lg:w-[50vw] lg:absolute lg:top-[56px] lg:right-0 px-8 py-12">
        <HoverCard
          image="https://thekleaner.qreativethemes.com/landing/demo-1.png"
          title="The Kleaner One"
        />
        <br />
        <br />
        <HoverCard
          image="https://thekleaner.qreativethemes.com/landing/demo-2.png"
          title="The Kleaner Two"
        />
        <br />
        <br />
        <HoverCard
          image="https://thekleaner.qreativethemes.com/landing/demo-3.png"
          title="The Kleaner Three"
        />
      </section>
    </>
  );
}

export default LiveList;
