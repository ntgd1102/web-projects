import {ActionType} from './actions';
import {Movie} from './types';

export interface MovieState {
  myMovies: Movie[];
  recommendedMovies: Movie[];
}

export interface State {
  movies: {
    myMovies: Movie[];
    recommendedMovies: Movie[];
  };
}

const initialState = {
  myMovies: [],
  recommendedMovies: [],
};

export const reducer = (state: MovieState = initialState, action: any) => {
  switch (action.type) {
    case ActionType.fetchingMovieDone:
      return {
        myMovies: [...action.payload.mylist],
        recommendedMovies: [...action.payload.recommendations],
      };
    case ActionType.addMovie: {
      const movieId = action.payload.id;
      return {
        recommendedMovies: state.recommendedMovies.filter(
            (item: Movie) => item.id !== movieId,
        ),
        myMovies: [...state.myMovies, action.payload],
      };
    }
    case ActionType.removeMovie: {
      const movieId = action.payload.id;
      return {
        myMovies: state.myMovies.filter((item: Movie) => item.id !== movieId),
        recommendedMovies: [...state.recommendedMovies, action.payload],
      };
    }
    default:
      return initialState;
  }
};

export default reducer;
