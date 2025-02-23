import "./Footer.css";
import Github from "../../assets/github.png";
import LinkedIn from "../../assets/linkedin.png"

function Footer() {
  return (
    <div className="footer">
        <div className="footer__author">© 2025 Supersite, Powered by News API</div>
        <ul className="footer__links">
    <li>Home</li>
    <li>TripleTen</li>
    <li> 
      <img className="footer__gitHub" src={Github} alt="GitHub" />
      </li>
    <li> 
      <img className="footer__linkedIn" src={LinkedIn} alt="LinkedIn" />
      </li>
  </ul>
    </div>
  );
}

export default Footer;