const asyncHandler = require("express-async-handler");
const Movie = require("../../models/Movie");

const createNewMovie = asyncHandler(async (req, res) => {
  const {
    maPhim,
    tenPhim,
    moTa,
    trailer,
    theLoai,
    khoiChieu,
    doiTuong,
    hinhChinh,
    hinhPhu,
    chiTiet,
    hinhNhanVat,
    hinhChu,
  } = req.body;

  //check empty
  if (
    !maPhim ||
    !tenPhim ||
    !moTa ||
    !trailer ||
    !theLoai ||
    !khoiChieu ||
    !doiTuong ||
    !hinhChinh ||
    !hinhPhu ||
    typeof chiTiet !== "object"
  ) {
    return res
      .status(400)
      .json({ message: "Tất cả các trường không được để trống." });
  }

  //check empty of object chiTiet

  if (
    !chiTiet.daoDien ||
    !chiTiet.dienVien ||
    !chiTiet.thoiLuong ||
    !chiTiet.xuatXu
  ) {
    return res
      .status(400)
      .json({ message: "Tất cả các trường không được để trống." });
  }

  //   check duplicate
  const duplicate = await Movie.findOne({ maPhim }).lean().exec();
  if (duplicate) {
    return res.status(409).json({ message: "Phim đã tồn tại." });
  }

  //create new carousel
  const movieObject = {
    maPhim,
    tenPhim,
    moTa,
    trailer,
    theLoai,
    khoiChieu,
    doiTuong,
    hinhChinh,
    hinhPhu,
    chiTiet,
    hinhChu,
    hinhNhanVat,
  };
  const newMovie = await Movie.create(movieObject);

  if (newMovie) {
    res.status(201).json({
      message: `Phim đã được thêm thành công. `,
    });
  } else {
    res.status(400).json({ message: "Tạo mới phim không thành công." });
  }
});

module.exports = createNewMovie;
