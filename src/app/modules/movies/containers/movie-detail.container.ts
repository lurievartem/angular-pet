import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

import { State } from '../movies.redux';
import * as Actions from '../movies.action';
import * as selectors from '../movies.selector';
import { Movie } from '../movie.class';

@Component({
  selector: 'detail-container',
  template: `
    <ng-template #movieDetailTemplate let-data>
      <p>{{ (movieData$ | async).title }}
      <button (click)="redirect()">Edit</button>
      <button (click)="delete()">Delete</button>
    </ng-template>

    <observable-container [observer]="movieData$" [templateName]="movieDetailTemplate"></observable-container>
  `
})
export class MoviesDetailContainer implements OnInit {
  public movieData$: Observable<Movie>;
  public movieDataError$: Observable<boolean>;
  public movieID: number;
  public selectObservable$: Subscription;

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.movieID = +params.get('movieID');
      });

    this.store.select(selectors.movieId(this.movieID))
      .subscribe(data => { if(!data) this.store.dispatch(new Actions.LoadMovie(this.movieID)); })
      .unsubscribe();

    this.movieData$ = this.store.select(selectors.movieId(this.movieID));
    this.movieDataError$ = this.store.select(selectors.loadMovieError);
  }

  redirect() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  delete() {
    this.store.dispatch(new Actions.DeleteMovie(this.movieID));
    this.router.navigateByUrl('movies');
  }

}
