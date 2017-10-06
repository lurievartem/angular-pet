import { Movie } from './movie.class';
import * as layout from './movies.action';

export interface State {
  movies: Array<Movie>,
  loaded: boolean,
  loading: boolean,
  error? : string
};

const initialState: State = {
  movies: [],
  loaded: false,
  loading: false
};

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.LOAD_MOVIE:
      return state;
    case layout.LOAD_MOVIE_SUCCESS:
      return {
        ...state,
        movies: [ ...state.movies,  action.payload ]
      };
    case layout.LOAD_MOVIE_FAILURE:
      return {
        ...state,
        error: 'loadMovieById'
      };
    case layout.LOAD_MOVIES:
      return {
        ...state,
        loading: true
      };
    case layout.LOAD_MOVIES_SUCCESS:
      return {
        movies: action.payload,
        loaded: true,
        loading: false
      };
    case layout.LOAD_MOVIES_FAILURE:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: 'load'
      };
    case layout.CHANGE_MOVIE:
      return state;
    case layout.CHANGE_MOVIE_SUCCESS:
      return {
        ...state,
        movies: [ ...state.movies.filter(movie => movie.id !== action.payload.id), action.payload]
      };
    case layout.CHANGE_MOVIE_FAILURE:
      return { ...state, error: 'change' };
    case layout.DELETE_MOVIE:
      return state;
    case layout.DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.payload)
      };
    case layout.DELETE_MOVIE_FAILURE:
      return { ...state, error: 'delete' };
    default:
      return state;
  }
}
