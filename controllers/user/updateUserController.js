const asyncHandler = require("express-async-handler");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");

const updateUser = asyncHandler(async (req, res) => {
  const { taiKhoan, matKhau, ten, email, hinhAnh, chucVu, trangThai, tinhAnh } =
    req.body;
  const { id } = req.params;

  //confirm data
  if (
    !taiKhoan ||
    !matKhau ||
    !ten ||
    !email ||
    !hinhAnh ||
    !chucVu ||
    !tinhAnh ||
    !trangThai
  ) {
    return res.status(400).json({ message: "Tất cả các trường là bắt buộc" });
  }
  //check exist
  const user = await User.findById(id).exec();
  if (!user) {
    return res.status(400).json({ message: "Không tìm thấy người dùng" });
  }

  //check duplicate
  const duplicate = await User.findOne({ taiKhoan }).lean().exec();

  if (duplicate && duplicate._id.toString() !== id) {
    return res.status(409).json({ message: "Tài khoản đã tồn tại." });
  }

  //   hash password
  // hash password
  // const salt = bcrypt.genSaltSync(10);
  // const hashedMatKhau = bcrypt.hashSync(matKhau, salt);

  //update
  user.taiKhoan = taiKhoan;
  user.matKhau = matKhau;
  user.ten = ten;
  user.email = email;
  user.hinhAnh = hinhAnh;
  user.chucVu = chucVu;
  user.trangThai = trangThai;
  user.tinhAnh = tinhAnh;

  const updateUser = await user.save();

  res
    .status(202)
    .json({ message: `Tài khoản ${updateUser.taiKhoan} cập nhật thành công!` });
});

module.exports = updateUser;
