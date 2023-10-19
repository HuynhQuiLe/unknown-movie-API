const asyncHandler = require("express-async-handler");
const Carousel = require("../../models/Carousel");

const getAllCarousels = asyncHandler(async (req, res) => {
  const carousels = await Carousel.find().lean().exec();

  if (!carousels?.length) {
    return res
      .status(400)
      .json({ message: "Không tìm thấy danh sách carousel phim" });
  }

  return res.status(200).json(carousels);
});

module.exports = getAllCarousels;
