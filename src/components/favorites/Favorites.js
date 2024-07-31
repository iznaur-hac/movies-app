import React from "react";
import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { favoriteMovieRemover } from "../../data/reducer";

import star from "../../img/inactive-star.png";
import "./style.scss";

function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const remove = (item) => {
    dispatch(favoriteMovieRemover(item));
  };

  return (
    <section className="favorites">
      <h2 className="favorites__title">Favorites</h2>

      {favorites.length === 0 ? (
        <h2 className="favorites__title">
          You don't have any favorite movies(._.)
        </h2>
      ) : (
        <div className="favorites__list">
          {favorites.map((item) => {
            return (
              <div className="favorites__favorite" key={item.id}>
                <NavLink to={`/movie/${item.id}`} className="movies__link">
                  <img src={item.poster_path} alt={item.title} />
                </NavLink>

                <p>{item.title}</p>
                <button onClick={() => remove(item)}>
                  - &nbsp; Remove to my list
                </button>

                <div className="favorites__rating">
                  <img alt="star" src={star} />
                  <span>{item.vote_average.toFixed(1)}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Favorites;
