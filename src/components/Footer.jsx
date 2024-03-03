import "./FooterStyles.css";
import React from "react";
import { FaGithubSquare, FaLinkedin, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="github">
            <a href="https://github.com/AndyFt" target="_blank">
              <FaGithubSquare
                size={20}
                style={{ color: "#000" }}
              />
            </a>
          </div>
          <div className="linkedin">
            <a href="https://www.linkedin.com/in/andreantfontana/" target="_blank">
              <FaLinkedin
                size={20}
                style={{ color: "#000" }}
              />
            </a>
          </div>
          <div className="email">
            <a href="mailto:andyfontana.dev@gmail.com" target="_blank">
              <FaMailBulk
                size={20}
                style={{ color: "#000" }}
              />
            </a>
          </div>
        </div>

        <div className="bottom">
          <div className="made">Made with ❤️ by Andrea Fontana - 2024.</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
