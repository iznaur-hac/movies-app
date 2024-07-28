import React from "react";
import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";

import star from "../../img/inactive-star.png";
import "./style.scss";

function Movies() {
  const movies = useSelector((state) => state.movies);

  return (
    <section className="movies">
      <h2 className="movies__title">Movies</h2>
      <div className="movies__list">
        {movies.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={`/movie/${index}`}
              className="movies__link">
              <div className="movies__movie">
                <img src={item.poster_path} alt={item.title} />
                <p>{item.title}</p>
                <button>+ &nbsp; Add to my list</button>

                <div className="movies__rating">
                  <img alt="star" src={star} />
                  <span>{item.vote_average.toFixed(1)}</span>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
}

export default Movies;
