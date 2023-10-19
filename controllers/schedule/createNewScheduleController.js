const asyncHandler = require("express-async-handler");
const Schedule = require("../../models/Schedule");

const createNewSchedule = asyncHandler(async (req, res) => {
  const { maPhim, maHeThongRap, maCumRap, maRap, suatChieuPhim } = req.body;

  //check empty
  if (!maPhim || !maHeThongRap || !maCumRap || !maRap || !suatChieuPhim) {
    return res
      .status(400)
      .json({ message: "Tất cả các trường không được để trống." });
  }

  //   check conflict Schedule

  //create new carousel
  const scheduleObject = {
    maPhim,
    maHeThongRap,
    maCumRap,
    maRap,
    suatChieuPhim,
  };
  const newSchedule = await Schedule.create(scheduleObject);

  if (newSchedule) {
    res.status(201).json({
      message: `Suất chiếu phim đã được thêm thành công. `,
    });
  } else {
    res
      .status(400)
      .json({ message: "Tạo mới Suất chiếu phim không thành công." });
  }
});

module.exports = createNewSchedule;
