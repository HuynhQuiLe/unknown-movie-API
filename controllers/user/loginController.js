const asyncHandler = require("express-async-handler");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = asyncHandler(async (req, res) => {
  const { taiKhoan, matKhau } = req.body;
  //check empty value
  if (!taiKhoan?.trim() || !matKhau?.trim()) {
    return res
      .status(400)
      .json({ message: "Tất cả các trường không được để trống." });
  }

  //check tai khoan ton tại
  const user = await User.findOne({ taiKhoan }).lean().exec();

  if (!user) {
    return res.status(400).json({ message: "Tài khoản không tồn tại." });
  }

  const validMatKhau = bcrypt.compareSync(matKhau, user.matKhau);

  //   MAT KHAU SAI
  if (!validMatKhau)
    return res.status(400).json({ message: "Mật khẩu không đúng." });

  // MAT KHAU DUNG
  //careate and save token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

  res.header("token", token);
  res
    .status(200)
    .json({ message: "Đăng nhập thành công.", user: { ...user, token } });
});

module.exports = login;
