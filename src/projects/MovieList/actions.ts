import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { Movie } from './types';
import { RootState } from '../../store';

export enum ActionType {
  fetchingMovieDone = 'FETCHING_MOVIE_DONE',
  addMovie = 'ADD_MOVIE',
  removeMovie = 'REMOVE_MOVIE',
}

export const getList =
  (): ThunkAction<void, RootState, null, Action<string>> =>
    async (dispatch) => {
      try {
        const res = await fetch('moviedata.json', {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        })
            .then((res: any) => res.json())
            .then((res: any) => res);
        dispatch({
          type: ActionType.fetchingMovieDone,
          payload: res,
        });
        return 1;
      } catch (e) {}
    };

export const removeMovieFromMyList = (movie: Movie) => ({
  type: ActionType.removeMovie,
  payload: movie,
});

export const addMovieToMyList = (movie: Movie) => ({
  type: ActionType.addMovie,
  payload: movie,
});
