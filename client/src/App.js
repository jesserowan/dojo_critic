import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Games from './components/Games';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Dojo Critic</h1>
        <h2>The best game review website on localhost!</h2>
        <Games prop1="games are cool" />
      </div>
    );
  }
}

export default App;
