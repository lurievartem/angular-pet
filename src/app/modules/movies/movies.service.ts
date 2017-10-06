import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Movie } from './movie.class';

@Injectable()
export class MoviesService {
  private API_PATH = '../../../assets/movies.json';

  constructor(private http: Http) {}

  loadMovies(query: string = ''): Observable<Movie[]> {
    return this.http
      .get(this.API_PATH)
      .map((res: Response): Movie[] => res.json() || [])
      .map((movies: Movie[]): Movie[] =>
        movies.filter((movie: Movie): boolean =>
          movie.title.includes(query)
        )
      );
  }

  loadMovie(id: number): Observable<Movie> {
    return this.http
      .get(this.API_PATH)
      .map((res: Response): Movie[] => res.json() || [])
      .map((movies: Movie[]): Movie =>
        movies.find((element) => element.id === id)
    );
  }

  // changeMovie(movie: Movie): Observable<number> {
  //   return
  // }
  //
  // delete(movie: Movie): Observable<number> {
  //   return
  // }
}
