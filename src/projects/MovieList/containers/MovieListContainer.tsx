import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addMovieToMyList, getList, removeMovieFromMyList} from '../actions';
import {getMyMovieList, getRecommendedList} from '../selectors';
import {Movie} from '../types';
import MovieListRow from '../components/MovieListRow';

export const MovieListContainer: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(getList());
  }, []);
  const recommendedMovies = useSelector(getRecommendedList);
  const myMovieList = useSelector(getMyMovieList);
  const deleteMovie = useCallback((movie: Movie) => {
    dispatch<any>(removeMovieFromMyList(movie));
  }, []);
  const addMovie = useCallback((movie: Movie) => {
    dispatch<any>(addMovieToMyList(movie));
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
