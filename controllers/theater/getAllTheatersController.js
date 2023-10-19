const asyncHandler = require("express-async-handler");
const Theater = require("../../models/Theater");

const getAllTheaters = asyncHandler(async (req, res) => {
  const theaters = await Theater.find().lean().exec();

  if (!theaters?.length) {
    return res
      .status(400)
      .json({ message: "Không tìm thấy danh sách hệ thống rạp phim." });
  }

  return res
    .status(200)
    .json({ message: "Lấy danh sách hệ thống rạp phim thành công.", theaters });
});

module.exports = getAllTheaters;
