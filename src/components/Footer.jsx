import { right } from "@popperjs/core";
import "./FooterStyles.css";
import React from "react";
import { FaHome, FaGithubSquare, FaLinkedin, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="github">
            <a href="https://github.com/AndyFt">
              <FaGithubSquare
                size={20}
                style={{ color: "#000" }}
              />
            </a>
          </div>
          <div className="linkedin">
            <a href="https://www.linkedin.com/in/andreantfontana/">
              <FaLinkedin
                size={20}
                style={{ color: "#000" }}
              />
            </a>
          </div>
          <div className="email">
            <a href="mailto:andyfontana.dev@gmail.com">
              <FaMailBulk
                size={20}
                style={{ color: "#000" }}
              />
            </a>
          </div>
        </div>

        <div className="bottom">
          <div className="made">Made with ❤️ by Andrea Fontana.</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
