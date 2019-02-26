import {Component} from "react";
import React from "react";
import axios from 'axios';

class OneGame extends Component {
  constructor(props){
    super(props);
    this.state = {
      game: {
        title: '',
        genre: '',
        studio: ''
      },
      oldGame: {
        title: '',
        genre: '',
        studio: ''
      },
      errors: {
        title: '',
        genre: '',
        studio: ''
      }
    }
  }

  componentDidMount = () => {
    console.log(this.props.match.params._id);
    axios.get(`http://localhost:8000/videogames/${this.props.match.params._id}`).then( res => {
      this.setState({
        game: res.data.game,
        oldGame: res.data.game
      })
    }).catch( err => {
      console.log(err);
    })
  };

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
    let url = `http://localhost:8000/videogames/${this.props.match.params._id}`;
    axios.put(url, this.state.game).then( res => {
      if (res.data.status === "not ok"){
        console.log(res);
        this.setState({
          errors: res.data.errors.errors
        })
      } else {
        //this redirects us back to the given route
        // this.props.history.push('/');
        console.log(res);
      }
    }).catch( err => {
      console.log(err);
    });
  };

  remove = () => {
    let id = this.props.match.params._id;
    axios.delete(`http://localhost:8000/videogames/${id}`).then( res => {
      this.props.history.push('/');
    }).catch( err => {
      console.log(err);
    })
  };

  render() {
    const { title, genre, studio } = this.state.game;
    return (
      <div>
        <fieldset>
          <legend>
            <h3>{this.state.oldGame.title}</h3>
          </legend>
          <p>Genre: {this.state.oldGame.genre}</p>
          <p>Studio: {this.state.oldGame.studio}</p>
        </fieldset>
        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input type="text" value={title} onChange={this.handleTitle}/>
          <p>{
            (this.state.errors.title) ? <span>{this.state.errors.title.message}</span> : <span></span>
          }</p>

          <label>Genre</label>
          <input type="text" value={genre} onChange={this.handleGenre} />
          <p>{
            (this.state.errors.genre) ? <span>{this.state.errors.genre.message}</span> : <span></span>
          }</p>

          <label>Studio</label>
          <input type="text" value={studio} onChange={this.handleStudio} />
          <p>{
            (this.state.errors.studio) ? <span>{this.state.errors.studio.message}</span> : <span></span>
          }</p>

          <button type="submit" className="button" >Update</button>
          <button className="button" onClick={this.remove}>Delete</button>
        </form>
      </div>

    )
  }
}

export default OneGame;