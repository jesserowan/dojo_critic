import {Component} from "react";
import React from "react";
import "react-router";
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';


class Game extends Component {
  constructor(props) {
    super ( props );
  }
  render() {
    return (
      <fieldset>
        <legend>
          <h3>{this.props.game.title}</h3>
        </legend>
        <p>Genre: {this.props.game.genre}</p>
        <p>Studio: {this.props.game.studio}</p>
        <button className="button" onClick = {this.props.deleteGame.bind(this.props.game._id)}>Delete</button>
        <Link className="button" to={"/game/" + this.props.game._id}>Edit</Link>
        <Link className="button" to={"/game/" + this.props.game._id + '/review'}>Review</Link>
      </fieldset>
    )
  }
}

export default Game;
