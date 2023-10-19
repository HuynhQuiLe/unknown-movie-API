const asyncHandler = require("express-async-handler");
const Theater = require("../../models/Theater");

const updateTheater = asyncHandler(async (req, res) => {
  const { tenHeThongRap, logo, trangThai, _id } = req.body;
  const { maHeThongRap } = req.params;

  //   check empty
  if (!tenHeThongRap || !logo || !trangThai) {
    return res.status(400).json({ message: "Tất cả các trường là bắt buộc" });
  }

  if (!maHeThongRap) {
    return res.status(400).json({ message: "Mã hệ thống rạp là bắt buộc" });
  }

  //check exist
  const theater = await Theater.findOne({ maHeThongRap }).exec();
  if (!theater) {
    return res.status(400).json({ message: "Không tìm thấy hệ thống rạp." });
  }

  //   check duplicate
  if (theater && theater._id.toString() !== _id) {
    return res.status(409).json({ message: "Hệ thống rạp đã tồn tại." });
  }

  //update
  theater.maHeThongRap = maHeThongRap;
  theater.tenHeThongRap = tenHeThongRap;
  theater.logo = logo;
  theater.trangThai = trangThai;

  const updateTheater = await theater.save();

  res.status(202).json({
    message: `Hệ thống rạp ${updateTheater.tenHeThongRap} cập nhật thành công!`,
  });
});

module.exports = updateTheater;
