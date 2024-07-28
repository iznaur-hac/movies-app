import "./style.scss";

import logo from "../../img/logo1.png";
import search from "../../img/search.png";
import alert from "../../img/alert.png";

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__links nav__links_gap">
        <li>Movies</li>
        <li>Favorite</li>
      </ul>

      <img src={logo} alt="logo" className="logo" />

      <ul className="nav__links">
        <li>
          <img src={search} alt="search" />
        </li>
        <li>
          <img src={alert} alt="alert" className="nav__alert" />
        </li>
        <li>Sign Up</li>
      </ul>
    </nav>
  );
}

export default Nav;
