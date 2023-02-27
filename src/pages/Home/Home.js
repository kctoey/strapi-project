import React from "react";
import Categories from "../../component/Categories/Categories";
import Contact from "../../component/Contact/Contact";
import FeatureProduct from "../../component/FeatureProducts/FeatureProduct";
import Slider from "../../component/Slider/Slider";
import "./Home.scss";
const Home = () => {
  return (
    <div>
      <Slider />
      <FeatureProduct type="featured" className="bg-black" />
      <Categories />
      <FeatureProduct type="trending" />
      <Contact />
    </div>
  );
};

export default Home;
