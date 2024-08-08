import { initialState } from "./initialState";

const FETCH_MOVIES_SUCCES = "FETCH_MOVIES_SUCCES";
const CURRENT_MOVIE_SWITCH = "CURRENT_MOVIE_SWITCH";
const FAVORITE_MOVIE_ADDER = "FAVORITE_MOVIE_ADDER";
const FAVORITE_MOVIE_REMOVER = "FAVORITE_MOVIE_REMOVER";
const FETCH_MOVIE_BY_ID = "FETCH_MOVIE_BY_ID";
const LOADING_ACTIVE = "LOADING_ACTIVE";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCES:
      return {
        ...state,
        movies: [...state.movies, ...action.payload.docs],
        loading: false,
      };

    case CURRENT_MOVIE_SWITCH:
      return {
        ...state,
        currentMovie: action.payload,
      };

    case FAVORITE_MOVIE_ADDER:
      const isFavorite = state.favorites.some(
        (movie) => movie.id === action.payload.id
      );
      return {
        ...state,
        favorites: isFavorite
          ? state.favorites
          : [...state.favorites, action.payload],
      };

    case FAVORITE_MOVIE_REMOVER:
      return {
        ...state,
        favorites: state.favorites.filter(
          (movie) => movie.id !== action.payload.id
        ),
      };

    case FETCH_MOVIE_BY_ID:
      return {
        ...state,
        selectedMovie: { ...action.payload },
      };

    case LOADING_ACTIVE:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export const fetchMoviesSucces = (payload) => ({
  type: FETCH_MOVIES_SUCCES,
  payload,
});

export const fetchMovieByIdSucces = (payload) => ({
  type: FETCH_MOVIE_BY_ID,
  payload,
});

export const currentMovieSwitch = (payload) => ({
  type: CURRENT_MOVIE_SWITCH,
  payload,
});

export const favoriteMovieAdder = (payload) => ({
  type: FAVORITE_MOVIE_ADDER,
  payload,
});

export const favoriteMovieRemover = (payload) => ({
  type: FAVORITE_MOVIE_REMOVER,
  payload,
});

export const loading_active = () => ({
  type: LOADING_ACTIVE,
});
