import React from "react";
import AboutHero from "./sections/AboutHero";
import AboutDesc from "./sections/AboutDesc";
import AboutPoints from "./sections/AboutPoints";
import AboutReviews from "./sections/AboutReviews";
import AboutDesc2 from "./sections/AboutDesc2";
import Footer from "../../components/layout/Footer";

function About() {
  return (
    <>
      <AboutHero />
      <AboutDesc />
      <AboutPoints />
      <AboutReviews />
      <AboutDesc2 />
    </>
  );
}

export default About;
