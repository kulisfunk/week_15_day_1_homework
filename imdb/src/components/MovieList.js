import React from 'react';
import Movie from './Movie';


class MovieList extends React.Component {
  render() {
    return (
    <div className="movie-list">
     this is a movie list
     <Movie />
     <Movie />
     <Movie />
     <button onClick={this.showMoreMovies}>See more opening this week</button>

    </div>
  )}
}

export default MovieList;
