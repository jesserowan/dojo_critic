import {Component} from "react";
import axios from "axios";
import React from "react";
import Game from './Game';

class Games extends Component {
  constructor(props){
    super(props);
    this.state = {
      games: []
    }
  }


  componentDidMount = () => {
    axios.get('http://localhost:8000/videogames').then( res => {
      this.setState({
        games: res.data.games
      })
    }).catch( err => {
      console.log(err);
    })
  };

  deleteGame = (id) => {
    console.log('been clicked', id);
    axios.delete(`http://localhost:8000/videogames/${id}`).then( res => {
      let g = [];
      for (let game of this.state.games) {
        if (game._id !== id) {
          g.push(game);
        }
      }
      this.setState({
        games: g
      })
    }).catch( err => {
      console.log(err);
    })
  };

  render () {
    return (
      <div>
        {
          this.state.games.map((game) =>
            <Game key={game._id} game={game} deleteGame={this.deleteGame.bind(this, game._id)}/>
          )
        }
      </div>
    )
  }
}

export default Games;