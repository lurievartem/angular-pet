import { Action } from '@ngrx/store';
import { Movie } from './movie.class';

export const LOAD_MOVIE = '[Movie] Load';
export const LOAD_MOVIE_SUCCESS = '[Movie] Load Success';
export const LOAD_MOVIE_FAILURE = '[Movie] Load Failure';
export const LOAD_MOVIES = '[Movies] Load';
export const LOAD_MOVIES_SUCCESS = '[Movies] Load Success';
export const LOAD_MOVIES_FAILURE = '[Movies] Load Failure';
export const CHANGE_MOVIE = '[Movies] Change';
export const CHANGE_MOVIE_SUCCESS = '[Movies] Change Success';
export const CHANGE_MOVIE_FAILURE = '[Movies] Change Failure';
export const DELETE_MOVIE  = '[Movie] Delete';
export const DELETE_MOVIE_SUCCESS = '[Movie] Delete Success';
export const DELETE_MOVIE_FAILURE  = '[Movie] Delete Failure';

export class LoadMovie implements Action {
  readonly type = LOAD_MOVIE;

  constructor(public payload?: number) {}
}

export class LoadMovieSuccess implements Action {
  readonly type = LOAD_MOVIE_SUCCESS;

  constructor(public payload: Movie) {}
}

export class LoadMovieFailure implements Action {
  readonly type = LOAD_MOVIE_FAILURE;
}

export class LoadMovies implements Action {
  readonly type = LOAD_MOVIES;

  constructor(public payload?: string) {}
}

export class LoadMoviesSuccess implements Action {
  readonly type = LOAD_MOVIES_SUCCESS;

  constructor(public payload: Array<Movie>) {}
}

export class LoadMoviesFailure implements Action {
  readonly type = LOAD_MOVIES_FAILURE;
}

export class ChangeMovie implements Action {
  readonly type = CHANGE_MOVIE;

  constructor(public payload: Movie) {}
}

export class ChangeMovieSuccess implements Action {
  readonly type = CHANGE_MOVIE_SUCCESS;

  constructor(public payload: Movie) {}
}

export class ChangeMovieFailure implements Action {
  readonly type = CHANGE_MOVIE_FAILURE;
}

export class DeleteMovie implements Action {
  readonly type = DELETE_MOVIE;

  constructor(public payload: number) {}
}

export class DeleteMovieSuccess implements Action {
  readonly type = DELETE_MOVIE_SUCCESS;

  constructor(public payload: number) {}
}

export class DeleteMovieFailure implements Action {
  readonly type = DELETE_MOVIE_FAILURE;
}

export type Actions = LoadMovie
  | LoadMovieSuccess
  | LoadMovieFailure
  | LoadMovies
  | LoadMoviesSuccess
  | LoadMoviesFailure
  | ChangeMovie
  | ChangeMovieSuccess
  | ChangeMovieFailure
  | DeleteMovie
  | DeleteMovieSuccess
  | DeleteMovieFailure;
