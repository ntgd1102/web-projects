export interface Movie {
  id: string;
  title: string;
  img: string;
}

export interface MovieListState {
  myMovies: Movie[];
  recommendedMovies: Movie[];
}
