import React from 'react';
import MovieListRow from '../components/MovieListRow';
import { connect } from 'react-redux';
import { Movie } from '../types';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../../store';
import { Action } from 'redux';
import { addMovieToMyList, getList, removeMovieFromMyList } from '../actions';
import { getMyMovieList, getRecommendedList } from '../selectors';

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

class MovieListContainerWithClass extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.getList();
  }

  render() {
    const { deleteMovie, addMovie, myMoviesList, recommendedMovies } =
      this.props;
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
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MovieListContainerWithClass);
