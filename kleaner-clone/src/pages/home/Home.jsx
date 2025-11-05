import React from "react";
import HomeHero from "./sections/HomeHero";
import HomeCategories from "./sections/HomeCategories";
import HomeThemes from "./sections/HomeThemes";
import HomeFeaturedThemes from "./sections/HomeFeaturedThemes";
import HomeDescriptionSlide from "./sections/HomeDescriptionSlide";
import HomeDescriptionSlideTwo from "./sections/HomeDescriptionSlideTwo";
import HomeNewThemes from "./sections/HomeNewThemes";
import HomeFeatCreator from "./sections/HomeFeatCreator";
import HomeBestSellers from "./sections/HomeBestSellers";
import Footer from "../../components/layout/Footer";

function Home() {
  return (
    <section className="bg-gray-200">
      <HomeHero />
      <HomeCategories />
      <HomeThemes />
      <HomeFeaturedThemes />
      <HomeDescriptionSlide />
      <HomeDescriptionSlideTwo />
      <HomeNewThemes />
      <HomeFeatCreator />
      <HomeBestSellers />
    </section>
  );
}

export default Home;
