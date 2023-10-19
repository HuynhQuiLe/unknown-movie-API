const asyncHandler = require("express-async-handler");
const Schedule = require("../../models/Schedule");

const getAllSchedules = asyncHandler(async (req, res) => {
  const schedules = await Schedule.find().lean().exec();

  if (!schedules?.length) {
    return res
      .status(400)
      .json({ message: "Không tìm thấy danh sách lịch chiếu phim." });
  }

  return res
    .status(200)
    .json({ message: "Lấy danh sách lịch chiếu phim thành công.", schedules });
});

module.exports = getAllSchedules;
