import React from "react";
import HeroImg2 from "../HeroImg2";
import ContactContent from "../ContactContent";

const Contact = () => {
  return (
    <>
      <div>
        <HeroImg2 heading="Contact." text="Tell me what you're thinking, let's chat!"/>
      </div>
      <ContactContent />
    </>
  );
};

export default Contact;
