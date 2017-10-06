import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Movie } from '../../movie.class';

@Component({
  selector: 'movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.css']
})
export class MoviePreviewComponent implements OnInit {
  @Input() movie: Movie;
  @Output() onClick = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  open() {
    this.onClick.emit(this.movie.id);
  }

}
