import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <div className="header">
      <p className="header__logo">NewsExplorer</p>
      <Navigation />
    </div>
  );
}

export default Header;
