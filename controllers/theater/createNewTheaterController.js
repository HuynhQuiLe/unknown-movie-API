const asyncHandler = require("express-async-handler");
const Theater = require("../../models/Theater");

const createNewTheater = asyncHandler(async (req, res) => {
  const { tenHeThongRap, maHeThongRap, logo } = req.body;

  //check empty
  if (!tenHeThongRap || !maHeThongRap || !logo) {
    return res
      .status(400)
      .json({ message: "Tất cả các trường không được để trống." });
  }

  //   check duplicate
  const duplicate = await Theater.findOne({ maHeThongRap }).lean().exec();
  if (duplicate) {
    return res.status(409).json({ message: "Hệ thống rạp đã tồn tại." });
  }

  //create new carousel
  const theaterObject = {
    tenHeThongRap,
    maHeThongRap,
    logo,
  };
  const newTheater = await Theater.create(theaterObject);

  if (newTheater) {
    res.status(201).json({
      message: `Hệ thống rạp đã được thêm thành công. `,
    });
  } else {
    res.status(400).json({ message: "Tạo mới Hệ thống rạp không thành công." });
  }
});

module.exports = createNewTheater;
