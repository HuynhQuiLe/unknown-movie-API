const asyncHandler = require("express-async-handler");
const Movie = require("../../models/Movie");

const updateMovie = asyncHandler(async (req, res) => {
  const {
    maPhim,
    tenPhim,
    moTa,
    trailer,
    hinhChinh,
    hinhPhu,
    theLoai,
    doiTuong,
    phimHot,
    khoiChieu,
    hienThiPhim,
    chiTiet,
    hinhChu,
    hinhNhanVat,
  } = req.body;
  const { id } = req.params;

  //   check empty
  if (
    !maPhim ||
    !tenPhim ||
    !moTa ||
    !trailer ||
    !hinhChinh ||
    !Array.isArray(hinhPhu) ||
    !hinhPhu.length ||
    !theLoai ||
    !doiTuong ||
    typeof phimHot !== "boolean" ||
    !khoiChieu ||
    typeof hienThiPhim !== "boolean" ||
    typeof chiTiet !== "object" ||
    !hinhChu ||
    !hinhNhanVat
  ) {
    return res.status(400).json({ message: "Tất cả các trường là bắt buộc" });
  }

  if (
    !chiTiet.daoDien ||
    !chiTiet.dienVien ||
    !chiTiet.xuatXu ||
    !chiTiet.thoiLuong
  ) {
    return res
      .status(400)
      .json({ message: "Tất cả các trường của chi tiết phim là bắt buộc" });
  }

  if (!id) {
    return res.status(400).json({ message: "ID phim là bắt buộc." });
  }

  //check exist
  const movie = await Movie.findById(id).exec();
  if (!movie) {
    return res.status(400).json({ message: "Không tìm thấy phim." });
  }

  //check duplicate
  const duplicate = await Movie.findOne({ maPhim }).lean().exec();

  if (duplicate && duplicate._id.toString() !== id) {
    return res.status(409).json({ message: "Phim đã tồn tại." });
  }

  //update
  movie.maPhim = maPhim;
  movie.tenPhim = tenPhim;
  movie.moTa = moTa;
  movie.trailer = trailer;
  movie.hinhChinh = hinhChinh;
  movie.hinhPhu = hinhPhu;
  movie.theLoai = theLoai;
  movie.doiTuong = doiTuong;
  movie.phimHot = phimHot;
  movie.khoiChieu = khoiChieu;
  movie.hienThiPhim = hienThiPhim;
  movie.chiTiet = chiTiet;
  movie.hinhChu = hinhChu;
  movie.hinhNhanVat = hinhNhanVat;

  const updateMovie = await movie.save();

  res.status(202).json({
    message: `Phim ${updateMovie.tenPhim} cập nhật thành công!`,
  });
});

module.exports = updateMovie;
