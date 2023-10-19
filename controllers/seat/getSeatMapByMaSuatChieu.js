const asyncHandler = require("express-async-handler");
const Seat = require("../../models/Seat");

const getSeatMapByMaSuatChieu = asyncHandler(async (req, res) => {
  const { maSuatChieu } = req.params;
  //check empty
  if (!maSuatChieu) {
    return res.status(400).json({ message: "ID ghế là bắt buộc." });
  }

  //check exist

  const seat = await Seat.findOne({ maSuatChieu }).lean().exec();

  if (!seat) {
    return res.status(404).json({ message: "Không tìm thấy layout ghế." });
  }
  res.status(200).json({ message: "Tải layout ghế thành công.", seat });
});

module.exports = getSeatMapByMaSuatChieu;
