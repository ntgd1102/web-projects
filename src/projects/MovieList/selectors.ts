import {Movie} from './types';
import {createSelector} from 'reselect';

const getMovieState = (state: {
  movies: { myMovies: Movie[]; recommendedMovies: Movie[] };
}) => state.movies;

export const getMyMovieList = createSelector(
    getMovieState,
    (movieState) => movieState.myMovies,
);

export const getRecommendedList = createSelector(
    getMovieState,
    (movieState) => movieState.recommendedMovies,
);
