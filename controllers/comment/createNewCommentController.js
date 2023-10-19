const asyncHandler = require("express-async-handler");
const Comment = require("../../models/Comment");
const User = require("../../models/User");

const createNewComment = asyncHandler(async (req, res) => {
  const { maPhim, maNguoiDung, noiDung } = req.body;

  //check empty
  if (!noiDung) {
    return res.status(400).json({ message: "Nội dung không được để trống." });
  }

  //check empty
  if (!maNguoiDung) {
    return res
      .status(400)
      .json({ message: "Vui lòng đăng nhập để bình luận." });
  }

  //   GET MORE USER INFORMATION
  const user = await User.findOne({ _id: maNguoiDung });

  //create new carousel
  const commentObject = {
    maPhim,
    maNguoiDung,
    noiDung,
    tenNguoiDung: user.ten,
    avatar: user.hinhAnh,
  };
  const newComment = await Comment.create(commentObject);

  if (newComment) {
    res.status(201).json({
      message: `Bình luận đã được thêm thành công. `,
    });
  } else {
    res.status(400).json({ message: "Tạo mới bình luận không thành công." });
  }
});

module.exports = createNewComment;
