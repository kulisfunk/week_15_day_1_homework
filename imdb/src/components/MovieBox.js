import React from 'react';
import MovieList from './MovieList';


class MovieBox extends React.Component {

  render() {
    return (
      <div className="movie-box">
       IMDB movie list
       <MovieList />
       <button onClick={this.getShowtimes}> Get Showtimes</button>

      </div>
    )
  }

}

export default MovieBox;
