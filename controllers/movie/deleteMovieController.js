const asyncHandler = require("express-async-handler");
const Movie = require("../../models/Movie");

const deleteMovie = asyncHandler(async (req, res) => {
  const { id } = req.params;
  //check empty
  if (!id) {
    return res.status(400).json({ message: "ID phim là bắt buộc." });
  }

  //check exist

  const movie = await Movie.findById(id).lean().exec();

  if (!movie) {
    return res.status(404).json({ message: "Không tìm thấy phim." });
  }
  await Movie.deleteOne({ _id: id }).exec();
  const reply = `Phim ${movie.tenPhim} đã được xoá thành công`;

  res.status(200).json({ message: reply });
});

module.exports = deleteMovie;
