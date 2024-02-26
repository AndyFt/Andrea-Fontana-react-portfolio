import React from "react";
import  { Link } from 'react-router-dom';
import "./AboutContentStyles.css";
import MySkills from "./MySkills";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p className="about-text">
          A passionate Front-End Development student in the UK, transitioning
          from a successful career in Human Resources. My strong background in
          customer service, problem-solving, and communication fuels my
          dedication to creating user-centric web experiences. I'm a
          detail-oriented quick learner, actively building my expertise in HTML,
          CSS, JavaScript, and related technologies.
        </p>
        <Link to="/contact">
          <button className="btn">Contact Me</button>
        </Link>
      </div>

      <div className="right">
        <div className="skills-container">
          <MySkills />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
