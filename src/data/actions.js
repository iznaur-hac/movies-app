import { fetchMoviesSucces } from "./reducer";
import { fetchMovieByIdSucces } from "./reducer";

// взять все фильмы
export const moviesFetch = () => {
  return async function (dispatch) {
    const url =
      "https://api.kinopoisk.dev/v1.4/movie/search?limit=100&query=star%20wars";
    const options = {
      method: "GET",
      headers: {
        "X-API-KEY": "WFN8BFA-JW0MB3V-JMXDAAK-S2BAK3R",
        accept: "application/json",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        dispatch(fetchMoviesSucces(result));
        console.log(result);
      });
  };
};

//взять фильм по id
export const movieFetchById = (id) => {
  return async function (dispatch) {
    const url = `https://api.kinopoisk.dev/v1.4/movie/${id}`;
    const options = {
      method: "GET",
      headers: {
        "X-API-KEY": "WFN8BFA-JW0MB3V-JMXDAAK-S2BAK3R",
        accept: "application/json",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        dispatch(fetchMovieByIdSucces(result));
        console.log(result);
      });
  };
};
