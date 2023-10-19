const asyncHandler = require("express-async-handler");
const Theater = require("../../models/Theater");

const getTheaterByMaHeThongRap = asyncHandler(async (req, res) => {
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
  res
    .status(200)
    .json({ message: "Tìm thấy hệ thống rạp thành công", theater });
});

module.exports = getTheaterByMaHeThongRap;
