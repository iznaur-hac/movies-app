import React from "react";

import MovieNav from "../components/movie-nav/MovieNav";

import { useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";

import "../styles/movie.scss";

import star from "../img/inactive-star.png";

function Movie() {
  const { id } = useParams();
  const [comment, setComment] = useState("");

  const movies = useSelector((item) => item.movies);

  const movie = movies.find((item) => item.id === parseInt(id));

  const [comments, setComments] = useState([
    "Хороший фильм. Бла Бла бла",
    "Не хороший фильм. Бла Бла бла",
  ]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const addComment = () => {
    if (comment.trim() !== "") {
      setComments([comment, ...comments]);
      setComment("");
      console.log(comments);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addComment();
    }
  };

  return (
    <div className="wrapper">
      <header className="movie-header">
        <MovieNav />

        <div
          className="movie-header__container"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original//${movie.backdrop_path})`,
          }}>
          <div className="movie-header__title">
            <p>{movie.title}</p>
          </div>
        </div>
      </header>

      <main className="movie-info">
        <img
          src={movie.poster_path}
          alt="poster"
          className="movie-info__poster"
        />

        <ul className="movie-info__list">
          <li className="movie-info__description">
            <p>{movie.tagline}</p>
            <span>{movie.overview}</span>
          </li>

          <li className="movie-info__rating">
            <img alt="star" src={star} />
            <span>{movie.vote_average.toFixed(1)}</span>
          </li>

          <li className="movie-info__list-item">
            <p>type</p>
            <span>Movie</span>
          </li>

          <li className="movie-info__list-item">
            <p>Release Date:</p>
            <span>{movie.release_date.slice(0, 10)}</span>
          </li>

          <li className="movie-info__list-item">
            <p>Run time</p>
            <span>{`${movie.runtime} min`}</span>
          </li>

          <li className="movie-info__list-item">
            <p>Genres</p>
            <span>{movie.genres}</span>
          </li>
        </ul>
      </main>

      <section className="movie-comments">
        <div className="movie-comments__push">
          <input
            type="text"
            placeholder="Comment.."
            className="movie-comments__input"
            onChange={(e) => handleCommentChange(e)}
            value={comment}
            onKeyPress={handleKeyPress}
          />
          <button className="movie-comments__btn" onClick={addComment}>
            Add
          </button>
        </div>

        <div className="movie-comments__list">
          {comments.map((item, index) => {
            return (
              <div key={index} className="movie-comments__comment">
                {item}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Movie;
