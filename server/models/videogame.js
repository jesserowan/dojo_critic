const mongoose = require("mongoose"),
  ReviewSchema = require('./review');


const VideogameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minlength: [3, "Title must be 3 characters or longer."]
  },
  studio: {
    type: String,
    required: [true, "Studio is required"],
    minlength: [2, "Studio must be 2 characters or longer."]
  },
  genre: {
    type: String,
    required: [true, "Genre is required"],
    minlength: [3, "Genre must be 3 characters or longer."]
  },
  reviews: [ReviewSchema]
}, {timestamps: true});

mongoose.model('Videogame', VideogameSchema);