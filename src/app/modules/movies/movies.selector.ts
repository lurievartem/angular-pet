import { createSelector, createFeatureSelector } from '@ngrx/store';

import { State } from './movies.redux';
import { State as ReducerState } from './movies.reducer';
import { Movie } from './movie.class';

export const moviesFeature = createFeatureSelector<State>('movies');

export const getMoviesState = createSelector(
  moviesFeature,
  (state: State):ReducerState => state.moviesState
);

export const movies = createSelector(
  getMoviesState,
  (state: ReducerState):Movie[] => state.movies
);

export const loaded = createSelector(
  getMoviesState,
  (state: ReducerState):boolean => state.loaded
);

export const loading = createSelector(
  getMoviesState,
  (state: ReducerState):boolean => state.loading
);

export const loadError = createSelector(
  getMoviesState,
  (state: ReducerState):boolean => state.error === 'load'
);

export const changeError = createSelector(
  getMoviesState,
  (state: ReducerState):boolean => state.error === 'change'
);

export const deleteError = createSelector(
  getMoviesState,
  (state: ReducerState):boolean => state.error === 'delete'
);

export const loadMovieError = createSelector(
  getMoviesState,
  (state: ReducerState):boolean => state.error === 'loadMovieById'
);

export const moviesSort = (text: string) =>
  createSelector(
    movies,
    (movies: Movie[]):Movie[] => [...movies].sort((a, b) => a[text] - b[text])
);

export const movieId = (id: number) =>
  createSelector(
    movies,
    (movies: Movie[]):Movie => movies.find((element) => element.id === id)
);
