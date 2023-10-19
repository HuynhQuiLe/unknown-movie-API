const asyncHandler = require("express-async-handler");
const Carousel = require("../../models/Carousel");

const updateCarousel = asyncHandler(async (req, res) => {
  const { maPhim, hinhAnh, trangThai } = req.body;
  const { id } = req.params;

  //   check empty
  if (!maPhim || !hinhAnh || !trangThai) {
    return res.status(400).json({ message: "Tất cả các trường là bắt buộc" });
  }
  //check exist
  const carousel = await Carousel.findById(id).exec();
  if (!carousel) {
    return res.status(400).json({ message: "Không tìm thấy carousel." });
  }

  //check duplicate
  const duplicate = await Carousel.findOne({ maPhim }).lean().exec();

  if (duplicate && duplicate._id.toString() !== id) {
    return res.status(409).json({ message: "Carousel đã tồn tại." });
  }

  //update
  carousel.maPhim = maPhim;
  carousel.hinhAnh = hinhAnh;
  carousel.trangThai = trangThai;

  const updateCarousel = await carousel.save();

  res.status(202).json({
    message: `Carousel - mã phim ${updateCarousel.maPhim} cập nhật thành công!`,
  });
});

module.exports = updateCarousel;
