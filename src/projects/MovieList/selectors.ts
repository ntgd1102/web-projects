import { createSelector } from 'reselect';
import { RootState } from '../../store';

const getMovieState = (state: RootState) => state.movies;

export const getMyMovieList = createSelector(
    getMovieState,
    (movieState) => movieState.myMovies,
);

export const getRecommendedList = createSelector(
    getMovieState,
    (movieState) => movieState.recommendedMovies,
);
