const asyncHandler = require("express-async-handler");
const Carousel = require("../../models/Carousel");

const createCarousel = asyncHandler(async (req, res) => {
  const { maPhim, hinhAnh } = req.body;

  //   check empty
  // if (!maPhim?.trim() || !hinhAnh?.trim() || typeof trangThai !== "boolean") {
  if (!maPhim?.trim() || !hinhAnh?.trim()) {
    return res
      .status(400)
      .json({ message: "Tất cả các trường không được để trống." });
  }

  //   check duplicate
  const duplicate = await Carousel.findOne({ maPhim }).lean().exec();
  if (duplicate) {
    return res.status(409).json({ message: "Phim đã tồn tại." });
  }

  //create new carousel
  const carouselObject = { maPhim, hinhAnh };
  const newCarousel = await Carousel.create(carouselObject);

  if (newCarousel) {
    res.status(201).json({
      message: `Carousel đã được thêm thành công. `,
    });
  } else {
    res.status(400).json({ message: "Tạo carousel mới không thành công." });
  }
});

module.exports = createCarousel;
