const express = require("express");
const getAllMovies = require("../controllers/movie/getAllMoviesController");
const createNewMovie = require("../controllers/movie/createNewMovieController");
const getMovieByID = require("../controllers/movie/getMovieByIDController");
const deleteMovie = require("../controllers/movie/deleteMovieController");
const updateMovie = require("../controllers/movie/updateMovieController");

const router = express.Router();

router.route("/").get(getAllMovies).post(createNewMovie);
router.route("/:id").get(getMovieByID).delete(deleteMovie).put(updateMovie);

module.exports = router;
