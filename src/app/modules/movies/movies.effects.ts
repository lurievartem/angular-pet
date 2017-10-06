import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import * as movies from './movies.action';
import { MoviesService } from './movies.service';
import { Movie } from './movie.class';

@Injectable()
export class MoviesEffects {

  constructor(
    private movieService: MoviesService,
    private actions$: Actions
  ) {}

  @Effect() load$: Observable<Action> = this.actions$
    .ofType<movies.LoadMovies>(movies.LOAD_MOVIES)
    .mergeMap(action => {
      const query = action.payload;
      const nextSearch$ = this.actions$.ofType(movies.LOAD_MOVIES).skip(1);

      return this.movieService
        .loadMovies(query)
        .takeUntil(nextSearch$)
        .map((data: Movie[]) => new movies.LoadMoviesSuccess(data))
        .catch(() => of(new movies.LoadMoviesFailure()));
    });

  @Effect() loadMovie$: Observable<Action> = this.actions$
    .ofType<movies.LoadMovie>(movies.LOAD_MOVIE)
    .mergeMap(action => {
      const query = action.payload;
      const nextSearch$ = this.actions$.ofType(movies.LOAD_MOVIE).skip(1);

      return this.movieService
        .loadMovie(query)
        .takeUntil(nextSearch$)
        .map((data: Movie) => new movies.LoadMovieSuccess(data))
        .catch(() => of(new movies.LoadMoviesFailure()));
    });

  @Effect() deleteMovie$: Observable<Action> = this.actions$
    .ofType<movies.DeleteMovie>(movies.DELETE_MOVIE)
    .mergeMap(action => {
      const id = action.payload;
      const nextDelete$ = this.actions$.ofType(movies.DELETE_MOVIE).skip(1);

      return of(new movies.DeleteMovieSuccess(id));
    });

  @Effect() changeMovie$: Observable<Action> = this.actions$
    .ofType<movies.ChangeMovie>(movies.CHANGE_MOVIE)
    .mergeMap(action => {
      const data = action.payload;
      const nextDelete$ = this.actions$.ofType(movies.CHANGE_MOVIE).skip(1);

      return of(new movies.ChangeMovieSuccess(data));
    });
}
