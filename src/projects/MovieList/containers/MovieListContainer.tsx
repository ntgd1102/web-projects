import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addMovieToMyList, getList, removeMovieFromMyList} from '../actions';
import {getMyMovieList, getRecommendedList} from '../selectors';
import {Movie} from '../types';
import MovieListRow from '../components/MovieListRow';
import {ThunkDispatch} from 'redux-thunk';
import {RootState} from '../../../store';
import {Action} from 'redux';

export const MovieListContainer: React.FC = () => {
  const dispatch: ThunkDispatch<
    RootState,
    null,
    Action<string>
  > = useDispatch();
  useEffect(() => {
    dispatch(getList());
  }, []);
  const recommendedMovies = useSelector(getRecommendedList);
  const myMovieList = useSelector(getMyMovieList);
  const deleteMovie = useCallback((movie: Movie) => {
    dispatch(removeMovieFromMyList(movie));
  }, []);
  const addMovie = useCallback((movie: Movie) => {
    dispatch(addMovieToMyList(movie));
  }, []);
  return (
    <div>
      <MovieListRow
        movieList={myMovieList}
        handleButtonClick={deleteMovie}
        buttonText={'delete'}
        title={'My Movies'}
      />
      <MovieListRow
        movieList={recommendedMovies}
        handleButtonClick={addMovie}
        buttonText={'add'}
        title={'Recommends'}
      />
    </div>
  );
};
