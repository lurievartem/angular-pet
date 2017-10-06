import { Pipe } from '@angular/core';
import { Movie } from '../movie.class';

//for practise
@Pipe({
  name: "moviePipe"
})
export class MoviePipe {
  transform(value: Movie, fallback: boolean): string {
    if(value) {
      if(fallback) return `Id: ${value.id}, Title: ${value.title}`;

      return `Title: ${value.title}`;
    }
    return 'No film was find, sorry for incovience!!!';
  }
}
