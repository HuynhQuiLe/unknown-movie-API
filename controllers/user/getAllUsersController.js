const asyncHandler = require("express-async-handler");
const User = require("../../models/User");

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().lean().select("-matKhau");

  //   check user
  if (!users?.length) {
    return res.status(404).json({ message: "Không có người dùng tồn tại." });
  }
  res.status(200).json(users);
});

module.exports = getAllUsers;
