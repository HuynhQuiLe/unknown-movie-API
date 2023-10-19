const asyncHandler = require("express-async-handler");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");

const register = asyncHandler(async (req, res) => {
  const { taiKhoan, matKhau, ten, email } = req.body;

  //check empty value
  if (!taiKhoan?.trim() || !matKhau?.trim() || !ten?.trim() || !email?.trim()) {
    return res
      .status(400)
      .json({ message: "Tất cả các trường không được để trống." });
  }

  //   Check duplicate
  const dupplicate = await User.findOne({ taiKhoan }).lean().exec();
  if (dupplicate) {
    return res.status(409).json({ message: "Tài khoản đã tồn tại." });
  }

  // hash password
  const salt = bcrypt.genSaltSync(10);
  const hashedMatKhau = bcrypt.hashSync(matKhau, salt);

  //create new user
  const userObject = { taiKhoan, matKhau: hashedMatKhau, ten, email };
  const newUser = await User.create(userObject);

  if (newUser) {
    res.status(201).json({
      message: `Tài khoản ${newUser.taiKhoan} đã được tạo thành công. `,
    });
  } else {
    res.status(400).json({ message: "Tạo tài khoản mới không thành công." });
  }
});

module.exports = register;
