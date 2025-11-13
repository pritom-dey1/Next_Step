import React from "react";
import Hero from "../Components/Home/Hero";
import MarqueE from "../Components/Home/Marquee";
import { Helmet } from "react-helmet";
import CareerTest from "../Components/Home/CareerTest";
import FAQ from "../Components/FAQ";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>NextStep | Home</title>
      </Helmet>
      <Hero></Hero>
      <MarqueE></MarqueE>
      <FAQ></FAQ>
      <CareerTest></CareerTest>
    </div>
  );
};

export default Home;