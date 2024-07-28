import { initialState } from "./initialState";

const FETCH_MOVIES_SUCCES = "FETCH_MOVIES_SUCCES";
const CURRENT_MOVIE_SWITCH = "CURRENT_MOVIE_SWITCH";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCES:
      return {
        ...state,
        movies: [...state.movies, ...action.payload],
        loading: false,
      };

    case CURRENT_MOVIE_SWITCH:
      return {
        ...state,
        currentMovie: action.payload,
      };

    default:
      return state;
  }
};

export const fetchMoviesSucces = (payload) => ({
  type: FETCH_MOVIES_SUCCES,
  payload,
});

export const currentMovieSwitch = (payload) => ({
  type: CURRENT_MOVIE_SWITCH,
  payload,
});
