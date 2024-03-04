import React from "react";
import  { Link } from 'react-router-dom';
import "./AboutContentStyles.css";
import MySkills from "./MySkills";


const AboutContent = () => {
  const onButtonClick = () => {
    const pdfUrl = "src\assets\docs\AndreaFontana CV - Front-End Web Developer.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "AndreaFontana CV - Front-End Web Developer.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
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
        <div className="buttons-container">
        <Link to="/contact" className="button">
          Contact Me
        </Link>
        <button onClick={onButtonClick} className="button">
          Download my CV
        </button>
        </div>
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
