import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {addMovieToMyList, getList, removeMovieFromMyList} from '../actions';
import {getMyMovieList, getRecommendedList} from '../selectors';
import {Movie} from '../types';
import MovieListRow from '../components/MovieListRow';
import {ThunkDispatch} from 'redux-thunk';
import {RootState} from '../../../store';
import {Action} from 'redux';

interface DispatchProps {
  deleteMovie: (movie: Movie) => void;
  addMovie: (movie: Movie) => void;
  getList: () => void;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<RootState, null, Action<string>>,
) => ({
  deleteMovie: (movie: Movie) => dispatch(removeMovieFromMyList(movie)),
  addMovie: (movie: Movie) => dispatch(addMovieToMyList(movie)),
  getList: () => dispatch(getList()),
});

interface StateProps {
  myMoviesList: Movie[];
  recommendedMovies: Movie[];
}

const mapStateToProps = (state: RootState) => ({
  myMoviesList: getMyMovieList(state),
  recommendedMovies: getRecommendedList(state),
});

type Props = DispatchProps & StateProps;

export const MovieListContainerWithoutHook: React.FC<Props> = ({
  deleteMovie,
  addMovie,
  getList,
  myMoviesList,
  recommendedMovies,
}) => {
  const dispatch: ThunkDispatch<
    RootState,
    null,
    Action<string>
  > = useDispatch();
  useEffect(() => {
    getList();
  }, []);
  return (
    <div>
      <MovieListRow
        movieList={myMoviesList}
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

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MovieListContainerWithoutHook);
