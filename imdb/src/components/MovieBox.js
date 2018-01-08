import React from 'react';
import MovieList from './MovieList';


class MovieBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 1, title: "Sausage Party", showtimes: [1300, 1500, 1900]},
        {id: 2, title: "Cafe Society", showtimes: [1600, 1800, 2000]},
        {id: 3, title: "Morgan", showtimes: [1300, 1900, 2200]},
        {id: 4, title: "The 9th Life of Louis Drax", showtimes: [1330, 1530, 1930]},
        {id: 5, title: "Naam Hai Akira", showtimes: [1900]},
        {id: 6, title: "Equity", showtimes: [1300, 1500]},
        {id: 7, title: "Things to Come", showtimes: [1100, 1600, 2200]}
      ]
    }
  }

  // getShowtimes(movie)

  render() {
    return (
      <div className="movie-box">
      <h1>UK Opening This Week</h1>
       <MovieList data={this.state.data}/>
       <button onClick={this.getShowtimes}> Get Showtimes</button>

      </div>
    )
  }

}

export default MovieBox;
