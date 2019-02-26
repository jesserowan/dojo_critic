const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: [true, "Rating is required"]
  },
  comment: {
    type: String,
    required: [true, "Comment is required"],
    minlength: [10, "Comment must be 10 characters or longer."]
  }
}, {timestamps: true});

mongoose.model('Review', ReviewSchema);
module.exports = ReviewSchema;