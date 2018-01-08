import React from 'react';
import Movie from './Movie';


class MovieList extends React.Component {
  render() {
    const movieInfo = this.props.data.map(movie => {
      return (
        <Movie title={movie.title} key={movie.id} showtimes={movie.showtimes}/>
      )
    })
    return (
    <div className="movie-list">
     {movieInfo}
     <button onClick={this.showMoreMovies}>See more opening this week</button>

    </div>
  )}
}

export default MovieList;
