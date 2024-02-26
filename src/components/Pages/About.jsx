import React from "react";
import HeroImg2 from "../HeroImg2";
import AboutContent from "../AboutContent"

const About = () => {
  return (
    <>
      <div>
        <HeroImg2 heading="About." text="Get to know me!"/>
      </div>
      <AboutContent />
    </>
  );
};

export default About;
