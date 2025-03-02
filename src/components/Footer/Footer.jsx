import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Github from "../../assets/github.png";
import LinkedIn from "../../assets/linkedin.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__author">
        © 2025 Supersite, Powered by News API
      </div>
      <ul className="footer__links">
        <div className="footer__links-mobileView">
        <li>
          <Link to="/">Home</Link>
        </li>
        <a
          href="https://tripleten.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>TripleTen</li>
        </a>
        </div>
        <li>
          <a
            href="https://github.com/queenhekate/queenhekate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="footer__gitHub" src={Github} alt="GitHub" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/johanna-e-schnell/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="footer__linkedIn" src={LinkedIn} alt="LinkedIn" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
