import { fetchMoviesSucces } from "./reducer";

export const moviesFetch = () => {
  return async function (dispatch) {
    const url = "https://moviedatabase8.p.rapidapi.com/Search/star";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "0788537bb0mshb382a76b7ab1c37p1a4f6djsn113dedd1422b",
        "x-rapidapi-host": "moviedatabase8.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        dispatch(fetchMoviesSucces(result));
        console.log(result);
      });

    // const url = "https://imdb8.p.rapidapi.com/auto-complete?q=avengers";
    // const options = {
    //   method: "GET",
    //   headers: {
    //     "x-rapidapi-key": "0788537bb0mshb382a76b7ab1c37p1a4f6djsn113dedd1422b",
    //     "x-rapidapi-host": "imdb8.p.rapidapi.com",
    //   },
    // };

    // fetch(url, options)
    //   .then((response) => response.json())
    //   .then((result) => {
    //     dispatch(fetchMoviesSucces(result));
    //   });
  };
};
