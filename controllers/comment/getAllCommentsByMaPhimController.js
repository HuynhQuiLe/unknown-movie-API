const asyncHandler = require("express-async-handler");
const Comment = require("../../models/Comment");

const getAllCommentsByMaPhim = asyncHandler(async (req, res) => {
  const { maPhim } = req.params;

  const comments = await Comment.find({ maPhim }).lean().exec();

  if (!comments?.length) {
    return res
      .status(400)
      .json({ message: "Không tìm thấy danh sách bình luận." });
  }

  return res
    .status(200)
    .json({
      message: "Lấy danh sách bình luận thành công.",
      comments: comments.reverse(),
    });
});

module.exports = getAllCommentsByMaPhim;
