const express = require("express");
const getAllSchedulesInTotal = require("../controllers/schedule/getAllSchedulesInTotalController");

const router = express.Router();

router.route("/").get(getAllSchedulesInTotal);

module.exports = router;
