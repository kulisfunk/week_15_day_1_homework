import React from 'react';
import MovieList from './MovieList';


class MovieBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 1, title: "Sausage Party"},
        {id: 2, title: "Cafe Society"},
        {id: 3, title: "Morgan"},
        {id: 4, title: "The 9th Life of Louis Drax"},
        {id: 5, title: "Naam Hai Akira"},
        {id: 6, title: "Equity"},
        {id: 7, title: "Things to Come"}
      ]
    }
  }

  render() {
    return (
      <div className="movie-box">
       <MovieList data={this.state.data}/>
       <button onClick={this.getShowtimes}> Get Showtimes</button>

      </div>
    )
  }

}

export default MovieBox;
