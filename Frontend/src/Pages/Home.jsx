import React from "react";
import Hero from "../Components/Home/Hero";
import MarqueE from "../Components/Home/Marquee";
import { Helmet } from "react-helmet";
// import TrustedCompany from "../Components/Home/TrustedCompany";
// import CareerTest from "../Components/Home/CareerTest";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>NextStep | Home</title>
      </Helmet>
      <Hero></Hero>
      <MarqueE></MarqueE>
      {/* <TrustedCompany></TrustedCompany> */}
      {/* <CareerTest></CareerTest> */}
    </div>
  );
};

export default Home;