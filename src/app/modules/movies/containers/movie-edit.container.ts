import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { State } from '../movies.redux';
import * as Actions from '../movies.action';
import * as selectors from '../movies.selector';
import { Movie } from '../movie.class';

@Component({
  selector: 'edit-container',
  template: `
    <ng-template #movieEditTemplate let-data>
      <movie-edit [movie]="data" (onSubmit)="submit($event)" (onCancel)="cancel()"></movie-edit>
    </ng-template>

    <observable-container [observer]="changeMovie$" [templateName]="movieEditTemplate"></observable-container>
    <p *ngIf="changeDataError | async">Failure to update</p>
  `
})
export class MovieEditContainer implements OnInit {
  public movieID: number;
  public changeMovie$: Observable<Movie>;
  public changeDataError: boolean;

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.movieID = +params.get('movieID');
    });

    this.store.select(selectors.movieId(this.movieID))
      .subscribe(data => { if(!data) this.router.navigateByUrl(`movies`); })
      .unsubscribe();

    this.changeMovie$ = this.store.select(selectors.movieId(this.movieID));
  }

  submit(data: Movie) {
    this.store.dispatch(new Actions.ChangeMovie(data));

    this.store.select(selectors.changeError).subscribe(data => {
      this.changeDataError = data;

      if(!data) this.router.navigateByUrl(`movies/${this.movieID}`);
    });
  }

  cancel() {
    this.router.navigateByUrl(`movies/${this.movieID}`);
  }

}
