import React from 'react';
import { Movie } from '../types';

import './MovieListRow.css';

export interface MovieListRowProps {
  movieList: Movie[];
  handleButtonClick: (movie: Movie) => void;
  title: string;
  buttonText: string;
}

export const MovieListRow: React.FC<MovieListRowProps> = ({
  title,
  movieList,
  handleButtonClick,
  buttonText,
}) => {
  if (!movieList.length) {
    return null;
  }
  return (
    <div>
      <h3>{title}</h3>
      <div className="movie-list-row">
        {movieList.map((movie, index) => (
          <div key={index} className="movie-item">
            <h4>{movie.title}</h4>
            <img src={movie.img} alt={`movie image`}></img>
            <button onClick={() => handleButtonClick(movie)}>
              {buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieListRow;
