import React from "react";
import { Helmet } from "react-helmet";
import AboutSection from "./AboutSection";
import ExtraAbout from "./ExtraAbout";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>NextStep | About</title>
      </Helmet>
      <AboutSection></AboutSection>
      <ExtraAbout></ExtraAbout>
    </div>
  );
};

export default About;
