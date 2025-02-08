import './Navigation.css';

function Navigation() {
  return (
    <div className="navigation"> 
      <p className="navigation__logo">NewsExplorer</p>
      <div className="navigation__user">
        <button className="navigation__home">Home</button>
        <button className="navigation__signin">Sign In</button>
      </div>
    </div>
  );
}

export default Navigation;