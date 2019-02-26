import {Component} from "react";
import React from "react";

class Star extends Component {
  constructor (props){
    super(props);
  }

  stars = () => {
    let empty = '☆';
    let full = '★';
    let s = '';
    for (let i = 0; i<this.props.rating; i++){
      s += full;
    }
    while(s.length < 5){
      s += empty;
    }
    return s;
  };

  render () {
    return (
      <span>
        {this.stars()}
      </span>
    )
  }
}

export default Star;