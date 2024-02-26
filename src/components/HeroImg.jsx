import React from "react";
import "./HeroImgStyles.css";
import IntoImg from "../assets/images/hero.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="top"></div>
      <div className="mask">
        <img className="into-img" src={IntoImg} />
      </div>
      <div className="content">
        <p>Hi, welcome to my portfolio!</p>
        <h1>Front-End Developer</h1>
        <div>
          <Link to="/projects" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
