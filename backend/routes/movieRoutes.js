const express = require("express");
const router = express.Router();

const {
  getMovies,
  getMovie,
  setMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movieController");

router.route("/").get(getMovies).post(setMovie);
router.route("/:id").get(getMovie).put(updateMovie).delete(deleteMovie);

module.exports = router;
