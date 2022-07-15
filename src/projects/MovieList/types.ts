export interface Movie {
  id: string;
  name: string;
}

export interface MovieListState {
  myMovies: Movie[];
  recommendedMovies: Movie[];
}
