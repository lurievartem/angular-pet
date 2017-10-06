import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { State } from '../movies.redux';
import * as Actions from '../movies.action';
import * as selectors from '../movies.selector';
import { Movie } from '../movie.class';

@Component({
  selector: 'preview-container',
  template: `
    <ng-template #movieTemplate let-item>
      <movie-preview [movie]="item" (onClick)="go($event)"></movie-preview>
    </ng-template>

    <ng-template #moviePreviewTemplate let-data>
      <gallery [data]="data" [galleryTemplate]="movieTemplate"></gallery>
    </ng-template>

    <button-group (onSelectButton)="sort($event)" [buttons]="sortButton"></button-group>
    <search (onSearch)="search($event)"></search>
    <observable-container [observer]="moviesData$" [templateName]="moviePreviewTemplate"></observable-container>
  `
})
export class MoviesPreviewContainer implements OnInit {
  public moviesData$: Observable<Movie[]>;
  public moviesDataError$: Observable<boolean>;
  public sortButton: Array<Object>;

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.sortButton = [{ id: 'likes', label: "by likes" }, { id: 'stars', label: "by rating" }];

    //only to see changes after edit and delete movie
    //use
    this.store.select(selectors.movies)
      .subscribe(data => { if(!data.length) this.store.dispatch(new Actions.LoadMovies()); })
      .unsubscribe();
    //instead
    //this.store.dispatch(new Actions.LoadMovies());

    this.moviesData$ = this.store.select(selectors.movies)
    this.moviesDataError$ = this.store.select(selectors.loadError);
  }

  search(text: string) {
    this.store.dispatch(new Actions.LoadMovies(text));
  }

  sort(text: string) {
    this.moviesData$ = this.store.select(selectors.moviesSort(text));
  }

  go(movieID: number) {
    this.router.navigate([ movieID], { relativeTo: this.route });
  }
}
