const express = require("express");
const getAllTheaters = require("../controllers/theater/getAllTheatersController");
const createNewTheater = require("../controllers/theater/createNewTheaterController");
const getTheaterByMaHeThongRap = require("../controllers/theater/getTheaterByMaHeThongRapController");
const deleteTheater = require("../controllers/theater/deleteTheaterController");
const updateTheater = require("../controllers/theater/updateTheaterController");

const router = express.Router();

router.route("/").get(getAllTheaters).post(createNewTheater);
router
  .route("/:maHeThongRap")
  .get(getTheaterByMaHeThongRap)
  .delete(deleteTheater)
  .put(updateTheater);

module.exports = router;
