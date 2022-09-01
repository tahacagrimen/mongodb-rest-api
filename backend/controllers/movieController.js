// @desc Get movies
// @route GET /api/movies
// @access Private
const getMovies = (req, res) => {
  res.status(200).json({
    message: "Welcome to the movies API",
  });
};

// @desc Get movie by id
// @route GET /api/movies/:id
// @access Private
const getMovie = (req, res) => {
  res.status(200).json({
    message: "movie with id " + req.params.id,
  });
};

// @desc Set movie
// @route POST /api/movies
// @access Private
const setMovie = (req, res) => {
  res.status(200).json({
    message: "POST request to /api/movies",
  });
};

// @desc Update movie
// @route PUT /api/movies/:id
// @access Private
const updateMovie = (req, res) => {
  res.status(200).json({
    message: "Updated movie with id " + req.params.id,
  });
};

// @desc Delete movie
// @route DELETE /api/movies/:id
// @access Private
const deleteMovie = (req, res) => {
  res.status(200).json({
    message: "Deleted movie with id " + req.params.id,
  });
};

module.exports = {
  getMovies,
  getMovie,
  setMovie,
  updateMovie,
  deleteMovie,
};
