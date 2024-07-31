import { NavLink } from "react-router-dom";

import "./style.scss";

import logo from "../../img/logo1.png";
import search from "../../img/search.png";
import alert from "../../img/alert.png";

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__links nav__links_gap">
        <li>
          <NavLink className="nav__navlink" to="/movies">
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink className="nav__navlink" to="/favorite">
            Favorite
          </NavLink>
        </li>
      </ul>

      <NavLink to="/">
        <img src={logo} alt="logo" className="logo" />
      </NavLink>

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
