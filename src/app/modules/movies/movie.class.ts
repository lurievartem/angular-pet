export class Movie {
  id: number;
  title: string;
  posterUrl?: string;
  stars: number = 0;
  likes: number = 0;
  genres: string[] = [];
  actors: string[] = [];
  director: string[] =[];
  description?: string;
}
