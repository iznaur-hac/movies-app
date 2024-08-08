import React from "react";

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { favoriteMovieAdder, favoriteMovieRemover } from "../../data/reducer";

import star from "../../img/inactive-star.png";
import "./style.scss";

function Movies() {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const adder = (item) => {
    dispatch(favoriteMovieAdder(item));
  };

  const remove = (item) => {
    dispatch(favoriteMovieRemover(item));
  };

  const favorites = useSelector((state) => state.favorites);

  const isFavorite = (id) => {
    return favorites.some((movie) => movie.id === id);
  };

  return (
    <section className="movies">
      <h2 className="movies__title">Movies</h2>
      <div className="movies__list">
        {movies
          .filter((item) => {
            return (
              item.name !== "" &&
              item?.backdrop?.url !== null &&
              item?.poster?.url !== null
            );
          })
          .map((item) => {
            return (
              <div className="movies__movie" key={item.id}>
                <NavLink to={`/movie/${item.id}`} className="movies__link">
                  <img src={item?.poster?.url} alt={item.name} />
                </NavLink>
                <p>{item.name}</p>

                {isFavorite(item.id) ? (
                  <button
                    className="movies__remove-favorite"
                    onClick={() => remove(item)}>
                    - &nbsp; Remove from my list
                  </button>
                ) : (
                  <button
                    className="movies__add-favorite"
                    onClick={() => adder(item)}>
                    + &nbsp; Add to my list
                  </button>
                )}

                <div className="movies__rating">
                  <img alt="star" src={star} />
                  <span>{item?.rating?.imdb}</span>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default Movies;
