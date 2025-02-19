import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className="footer__author">© 2025 Supersite, Powered by News API</div>
        <div className="footer__links">
          <div className="footer__links-text">
            <div className="footer__home">Home</div>
            <div className="footer__tripleTen">TripleTen</div>
            </div>
            <div className="footer__links-img">
            <div className="footer__gitHub">Git</div>
            <div className="footer__facebook">LI</div>
            </div>
        </div>

    </div>
  );
}

export default Footer;