const express = require("express");
const getSeatMapByMaSuatChieu = require("../controllers/seat/getSeatMapByMaSuatChieu");
const createSeatMap = require("../controllers/seat/createSeatMapController");
const bookSeat = require("../controllers/seat/bookSeatController");

const router = express.Router();

router.route("/").post(createSeatMap);
router.route("/:maSuatChieu").get(getSeatMapByMaSuatChieu).post(bookSeat);

module.exports = router;
