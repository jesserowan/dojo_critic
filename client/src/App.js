import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Games from './components/Games';
import OneGame from './components/OneGame';
import NewGame from './components/NewGame';
import Review from './components/Review';
import "react-router";
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Welcome to Dojo Critic</h1>
          <h2>The best game review website on localhost!</h2>
          <div>
            <ul>
              <li><Link className="button" to="/">Home</Link></li>
              <li><Link className="button" to="/games/new">Add a Game</Link></li>
            </ul>
            <Route exact path="/" component={Games} />
            <Route path="/games/new" component={NewGame} />
            <Route exact path="/game/:_id" component={OneGame} />
            <Route path="/game/:_id/review" component={Review} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;