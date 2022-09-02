const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  original_title: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  credits: {
    type: Object,
    required: true,
  },
  poster_path: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Movie", movieSchema);
