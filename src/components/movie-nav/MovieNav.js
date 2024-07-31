import React from "react";
import { NavLink } from "react-router-dom";

import "./style.scss";

import logo from "../../img/logo2.png";
import arrow from "../../img/arrow-right.png";

function MovieNav() {
  return (
    <nav className="movie-nav">
      <div className="movie-nav__container">
        <NavLink to="/">
          <img src={logo} alt="logo" className="logo-2" />
        </NavLink>

        <ul className="movie-nav__list">
          <li className="movie-nav__items">
            <NavLink to="/movies" className="movie-nav__link">
              Movies
            </NavLink>
          </li>
          <li className="movie-nav__items">TV Shows</li>
          <li className="movie-nav__items">
            <NavLink to="/" className="movie-nav__link">
              <span>Suggest me</span>
              <img alt="arrow" src={arrow} />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MovieNav;
