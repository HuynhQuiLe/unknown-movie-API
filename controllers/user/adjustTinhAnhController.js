const asyncHandler = require("express-async-handler");
const User = require("../../models/User");

const adjustTinhAnh = asyncHandler(async (req, res) => {
  const { tinhAnh } = req.body;
  const { id } = req.params;

  //check exist
  let user = await User.findById(id).exec();
  if (!user) {
    return res.status(400).json({ message: "Không tìm thấy người dùng" });
  }

  //   hash password

  //update
  const { taiKhoan, matKhau, ten, email, hinhAnh, chucVu, lichSu, trangThai } =
    user;
  user.taiKhoan = taiKhoan;
  user.matKhau = matKhau;
  user.ten = ten;
  user.email = email;
  user.hinhAnh = hinhAnh;
  user.chucVu = chucVu;
  user.lichSu = lichSu;
  user.trangThai = trangThai;
  user.tinhAnh -= tinhAnh;
  const adjustTinhAnh = await user.save();

  res.status(202).json({
    message: `Tài khoản của bạn đã bị trừ ${tinhAnh} TINH ANH!`,
    user,
  });
});

module.exports = adjustTinhAnh;
