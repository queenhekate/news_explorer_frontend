import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <div className="header">
      <a href="/">
        <p className="header__logo">NewsExplorer</p>
      </a>
      <Navigation />
    </div>
  );
}

export default Header;
