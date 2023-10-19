const asyncHandler = require("express-async-handler");
const Seat = require("../../models/Seat");

const bookSeat = asyncHandler(async (req, res) => {
  const { seatMap } = req.body;
  const { maSuatChieu } = req.params;

  //   check empty

  if (!maSuatChieu) {
    return res.status(400).json({ message: "Mã layout ghế là bắt buộc." });
  }

  //check exist
  const suatChieu = await Seat.find({ maSuatChieu }).exec();
  if (!suatChieu) {
    return res.status(400).json({ message: "Không tìm thấy layout ghế." });
  }

  //update
  suatChieu.seatMap = seatMap;

  const bookSeat = await suatChieu.save();

  res.status(202).json({
    message: `Bạn đã đặt ghế thành công!`,
    suatChieu,
  });
});

module.exports = bookSeat;
