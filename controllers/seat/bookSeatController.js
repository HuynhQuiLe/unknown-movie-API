const asyncHandler = require("express-async-handler");
const Seat = require("../../models/Seat");

const bookSeat = asyncHandler(async (req, res) => {
  const { seatMap } = req.body;
  const { maSuatChieu: MSC } = req.params;

  //   check empty
  console.log(seatMap);

  if (!MSC) {
    return res.status(400).json({ message: "Mã layout ghế là bắt buộc." });
  }

  //check exist
  const suatChieu = await Seat.find({ maSuatChieu: MSC }).exec();
  if (!suatChieu) {
    return res.status(400).json({ message: "Không tìm thấy layout ghế." });
  }
  const { _id: id } = suatChieu[0];
  //update
  const suat = await Seat.findById(id.toString()).exec();
  const { maSuatChieu, maPhim, maHeThongRap, maCumRap, ngay, gio } = suat;
  suat.maSuatChieu = maSuatChieu;
  suat.maPhim = maPhim;
  suat.maHeThongRap = maHeThongRap;
  suat.maCumRap = maCumRap;
  suat.ngay = ngay;
  suat.gio = gio;
  suat.seatMap = seatMap;

  const booked = await suat.save();

  res.status(202).json({
    message: `Bạn đã đặt ghế thành công!`,
    booked,
  });
});

module.exports = bookSeat;
