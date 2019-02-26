import {Component} from "react";
import React from "react";

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
        <button onClick = {this.props.deleteGame.bind(this.props.game._id)}>Delete</button>
      </fieldset>
    )
  }
}

export default Game;