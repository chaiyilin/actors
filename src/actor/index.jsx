import React, { Component } from 'react';
import to from 'await-to-js';

import fetchMovies from './service';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actors: [],
      error: null
    };
  }

  async componentDidMount() {
    const [error, actors] = await to(fetchMovies());
    this.setState({
      actors,
      error
    });
  }

  render() {
    if (this.state.error) {
      throw new Error('got error');
    }
    return (
      <div>
        {Object.keys(this.state.actors).map((actor, index) => (
          <div key={index}>
            <div>{actor}</div>
            {this.state.actors[actor].map(movie => (
              <li key={movie.character}>{movie.character}</li>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
