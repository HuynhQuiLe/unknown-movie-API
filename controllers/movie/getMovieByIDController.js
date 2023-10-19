const asyncHandler = require("express-async-handler");
const Movie = require("../../models/Movie");

const getMovieByID = asyncHandler(async (req, res) => {
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
  res.status(200).json({ message: "Tìm thấy phim thành công", movie });
});

module.exports = getMovieByID;
