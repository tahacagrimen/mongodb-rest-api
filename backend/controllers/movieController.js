const asyncHandler = require("express-async-handler");

const Movie = require("../model/movieModal");

// @desc Get movies
// @route GET /api/movies
// @access Private
const getMovies = asyncHandler(async (req, res) => {
  const movies = await Movie.find({});
  res.status(200).json(movies);
});

// @desc Get movie by id
// @route GET /api/movies/:id
// @access Private
const getMovie = asyncHandler(async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (movie) {
    res.status(200).json(movie);
  }
  res.status(404);
});

// @desc Set movie
// @route POST /api/movies
// @access Private
const setMovie = asyncHandler(async (req, res) => {
  const movie = await Movie.create(req.body);
  res.status(201).json(movie);
});

// @desc Update movie
// @route PUT /api/movies/:id
// @access Private
const updateMovie = asyncHandler(async (req, res) => {
  const movie = await Movie.findById(req.params.id);

  if (!movie) {
    res.status(404);
    throw new Error("Movie not found");
  }

  const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedMovie);
});

// @desc Delete movie
// @route DELETE /api/movies/:id
// @access Private
const deleteMovie = asyncHandler(async (req, res) => {
  const movie = await Movie.findById(req.params.id);

  if (!movie) {
    res.status(404);
    throw new Error("Movie not found");
  }

  await movie.remove();

  res.status(200).json({
    message: "Deleted movie with id " + req.params.id,
  });
});

module.exports = {
  getMovies,
  getMovie,
  setMovie,
  updateMovie,
  deleteMovie,
};
