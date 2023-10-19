const asyncHandler = require("express-async-handler");
const Carousel = require("../../models/Carousel");

const deleteCarousel = asyncHandler(async (req, res) => {
  const { id } = req.params;
  //check empty
  if (!id) {
    return res.status(400).json({ message: "ID carousel là bắt buộc." });
  }

  //check exist

  const carousel = await Carousel.findById(id).lean().exec();

  if (!carousel) {
    return res.status(404).json({ message: "Không tìm thấy carousel." });
  }
  await Carousel.deleteOne({ _id: id }).exec();
  const reply = `Carousel - mã phim ${carousel.maPhim} đã được xoá thành công`;

  res.status(200).json({ message: reply });
});

module.exports = deleteCarousel;
