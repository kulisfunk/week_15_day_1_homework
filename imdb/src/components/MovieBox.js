import React from 'react';
import MovieList from './MovieList';


class MovieBox extends React.Component {

  render() {
    return (
      <div className="movie-box">
       IMDB movie list
       <MovieList /> 

      </div>
    )
  }

}

export default MovieBox;
