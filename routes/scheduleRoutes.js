const express = require("express");
const createNewSchedule = require("../controllers/schedule/createNewScheduleController");
const getAllSchedules = require("../controllers/schedule/getAllSchedulesController");

const router = express.Router();

router.route("/").get(getAllSchedules).post(createNewSchedule);

module.exports = router;
