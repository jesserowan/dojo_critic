import {Component} from "react";
import React from "react";
import axios from 'axios';
import Star from './Star';

class Review extends Component {
  constructor(props){
    super(props);
    this.state = {
      game: {
        title: '',
        genre: '',
        studio: ''
      },
      review: {
        rating: 5,
        comment: ''
      },
      reviews: []
    }
  }

  componentDidMount = () => {
    console.log(this.props.match.params._id);
    axios.get(`http://localhost:8000/videogames/${this.props.match.params._id}`).then( res => {
      this.setState({
        game: res.data.game
      });
      this.setState({
        reviews: res.data.game.reviews
      });
      console.log(res.data.game)
    }).catch( err => {
      console.log(err);
    })
  };

  handleRating = (e) => {
    let r = {...this.state.review};
    r.rating = parseInt(e.target.value);
    this.setState({
      review: r
    })
  };

  handleComment = (e) => {
    let r = {...this.state.review};
    r.comment = e.target.value;
    this.setState({
      review: r
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.review);
    let url = `http://localhost:8000/review/${this.props.match.params._id}`;
    axios.post(url, this.state.review).then( res => {
      console.log(res);
      this.componentDidMount();
    }).catch( err => {
      console.log(err);
    })
  };

  render() {
    return (
      <div>
        <fieldset>
          <legend>
            <h3>{this.state.game.title}</h3>
          </legend>
          <p>Genre: {this.state.game.genre}</p>
          <p>Studio: {this.state.game.studio}</p>
        </fieldset>
        <form onSubmit={this.handleSubmit}>
          <label>Rating</label>
          <select onChange={this.handleRating}>
            <option value="5">★★★★★</option>
            <option value="4">★★★★☆</option>
            <option value="3">★★★☆☆</option>
            <option value="2">★★☆☆☆</option>
            <option value="1">★☆☆☆☆</option>
          </select>
          <p></p>

          <label>Comment</label>
          <textarea onChange={this.handleComment} rows="5" cols="50"></textarea>
          <p></p>

          <input type="submit" />

        </form>
        <fieldset>
          <legend>
            <h3>Reviews</h3>
          </legend>
          { this.state.reviews.map( (review) =>
            <p key={review._id}><Star rating={review.rating}/> {review.comment}</p>
          )}
        </fieldset>
      </div>

    )
  }
}

export default Review;