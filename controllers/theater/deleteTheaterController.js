const asyncHandler = require("express-async-handler");
const Theater = require("../../models/Theater");

const deleteTheater = asyncHandler(async (req, res) => {
  const { maHeThongRap } = req.params;
  //check empty
  if (!maHeThongRap) {
    return res.status(400).json({ message: "Mã hệ thống rạp là bắt buộc." });
  }

  //check exist

  const theater = await Theater.findOne({ maHeThongRap }).lean().exec();

  if (!theater) {
    return res.status(404).json({ message: "Không tìm thấy hệ thống rạp." });
  }
  await Theater.deleteOne({ maHeThongRap }).exec();
  const reply = `Hệ thống rạp ${theater.tenHeThongRap} đã được xoá thành công`;

  res.status(200).json({ message: reply });
});

module.exports = deleteTheater;
