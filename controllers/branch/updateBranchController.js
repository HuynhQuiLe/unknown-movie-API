const asyncHandler = require("express-async-handler");
const Branch = require("../../models/Branch");

const updateBranch = asyncHandler(async (req, res) => {
  const { maHeThongRap, tenCumRap, diaChi, soDienThoai, trangThai, _id, rap } =
    req.body;
  const { maCumRap } = req.params;

  //   check empty
  if (
    !maHeThongRap ||
    !tenCumRap ||
    !diaChi ||
    !soDienThoai ||
    !trangThai ||
    !Array.isArray(rap) ||
    !rap.length
  ) {
    return res.status(400).json({ message: "Tất cả các trường là bắt buộc" });
  }

  if (!maCumRap) {
    return res.status(400).json({ message: "Mã cụm rạp là bắt buộc" });
  }

  //check exist
  const branch = await Branch.findOne({ maCumRap }).exec();
  if (!branch) {
    return res.status(400).json({ message: "Không tìm thấy cụm rạp ." });
  }

  //   check duplicate
  if (branch && branch._id.toString() !== _id) {
    return res.status(409).json({ message: "Cụm rạp đã tồn tại." });
  }

  //update
  branch.maHeThongRap = maHeThongRap;
  branch.maCumRap = maCumRap;
  branch.tenCumRap = tenCumRap;
  branch.diaChi = diaChi;
  branch.soDienThoai = soDienThoai;
  branch.trangThai = trangThai;
  branch.rap = rap;

  const updateBranch = await branch.save();

  res.status(202).json({
    message: `Cụm rạp ${updateBranch.tenCumRap} cập nhật thành công!`,
  });
});

module.exports = updateBranch;
