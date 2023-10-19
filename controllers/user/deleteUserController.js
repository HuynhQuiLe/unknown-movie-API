const asyncHandler = require("express-async-handler");
const User = require("../../models/User");

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  //   check empty
  if (!id) {
    return res.status(400).json({ message: "ID người dùng là bắt buộc." });
  }

  //check exist
  const user = await User.findById(id).lean().exec();
  if (!user) {
    return res.status(404).json({ message: "Không tìm thấy người dùng." });
  }

  await User.deleteOne({ _id: id }).exec();
  const reply = `Tài khoản ${user.taiKhoan} đã được xoá thành công`;

  res.status(200).json({ message: reply });
});

module.exports = deleteUser;
