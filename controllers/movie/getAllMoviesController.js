const asyncHandler = require("express-async-handler");
const Movie = require("../../models/Movie");

const getAllMovies = asyncHandler(async (req, res) => {
  const movies = await Movie.find().lean().exec();

  if (!movies?.length) {
    return res.status(400).json({ message: "Không tìm thấy danh sách phim" });
  }

  return res
    .status(200)
    .json({ message: "Lấy danh sách phim thành công.", movies });
});

module.exports = getAllMovies;
