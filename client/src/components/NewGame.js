import {Component} from "react";
import React from "react";
import axios from 'axios';

class NewGame extends Component {
  constructor (props) {
    super(props);
    this.state = {
      game: {
        "title": '',
        "genre": '',
        "studio": ''
      },
      errors: {
        "title": '',
        "genre": '',
        "studio": ''
      }
    }
  }

  handleTitle = (e) => {
    let g = {...this.state.game};
    g.title = e.target.value;
    this.setState({
      game: g
    });
  };

  handleGenre = (e) => {
    let g = {...this.state.game};
    g.genre = e.target.value;
    this.setState({
      game: g
    });
  };

  handleStudio = (e) => {
    let g = {...this.state.game};
    g.studio = e.target.value;
    this.setState({
      game: g
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/videogames', {
      "title": this.state.game.title,
      "studio": this.state.game.studio,
      "genre": this.state.game.genre
    }).then( res => {
      console.log(res);
      if (res.data.status === "not ok"){
        this.setState({
          errors: res.data.errors.errors
        })
      } else {
        //this redirects us back to the given route
        this.props.history.push('/');
      }
    }).catch( err => {
      console.log(err);
    });
  };

  render () {
    const {title, genre, studio} = this.state.game;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input type="text" value={title} onChange={this.handleTitle}/>
          <p>{
            (this.state.errors.title) ? <span>{this.state.errors.title.message}</span> : <span></span>
          }</p>

          <label>Genre</label>
          <input type="text" value={genre} onChange={this.handleGenre}/>
          <p>{
            (this.state.errors.genre) ? <span>{this.state.errors.genre.message}</span> : <span></span>
          }</p>

          <label>Studio</label>
          <input type="text" value={studio} onChange={this.handleStudio}/>
          <p>{
            (this.state.errors.studio) ? <span>{this.state.errors.studio.message}</span> : <span></span>
          }</p>

          <button type="submit" className="button" >Create</button>
        </form>

      </div>
    )
  }

}

export default NewGame;