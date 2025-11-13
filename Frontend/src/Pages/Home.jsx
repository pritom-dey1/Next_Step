import React from "react";
import Hero from "../Components/Home/Hero";
import MarqueE from "../Components/Home/Marquee";
import FAQ from "../Components/Home/FAQ"; 
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>NextStep | Home</title>
      </Helmet>
      <Hero></Hero>
      <MarqueE></MarqueE>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;