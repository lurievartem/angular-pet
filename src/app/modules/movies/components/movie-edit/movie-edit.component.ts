import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators }  from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Movie } from '../../movie.class';
import { MoviesValidators } from '../../helpers/movies.validators';

@Component({
  selector: 'movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  @Input() movie: Movie;
  @Output() onSubmit = new EventEmitter<Movie>();
  @Output() onCancel = new EventEmitter<undefined>();
  movieForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    const { title, posterUrl, genres, actors, director, description, stars } = this.movie;
    const pattern = '(http(s?):)|([\/|.|\w|\s])*\.(?:jpg|gif|png)';

    this.movieForm = this.fb.group({
      title: [ title, [ Validators.required, Validators.minLength(3) ]],
      stars: [ stars ],
      posterUrl: [ posterUrl, [ Validators.pattern(pattern) ] ],
      genres: this.fb.array(genres, MoviesValidators.validateGenres),
      actors: this.fb.array(actors),
      director: this.fb.array(director, null, MoviesValidators.validateAsyncDirector),
      description: [ description ]
    });

    //only for fun, add Validators by some terms
    this.movieForm.get('actors').valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(value => {
        if(value.length) {
          this.movieForm.get('actors').setValidators([ MoviesValidators.validateForDublicate ]);
          this.movieForm.get('actors').updateValueAndValidity();
        }
      });
  }

  setStarValue(value: number) {
    this.movieForm.get('stars').setValue(value);
    this.movieForm.markAsDirty();
  }

  submit() {
    const formModel = this.movieForm.value;
    const movie: Movie = { ...this.movie, ...formModel };

    this.onSubmit.emit(movie);
  }

  cancel() {
    this.onCancel.emit();
  }

}
