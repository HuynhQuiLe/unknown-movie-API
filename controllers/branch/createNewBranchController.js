const asyncHandler = require("express-async-handler");
const Theater = require("../../models/Theater");
const Branch = require("../../models/Branch");

const createNewBranch = asyncHandler(async (req, res) => {
  const { maHeThongRap, maCumRap, tenCumRap, diaChi, soDienThoai, rap } =
    req.body;

  //check empty
  if (
    !maHeThongRap ||
    !maCumRap ||
    !tenCumRap ||
    !diaChi ||
    !soDienThoai ||
    !Array.isArray(rap) ||
    !rap.length
  ) {
    return res
      .status(400)
      .json({ message: "Tất cả các trường không được để trống." });
  }

  //check MA HE THONG
  const theater = await Theater.findOne({ maHeThongRap }).lean().exec();

  if (!theater) {
    return res.status(400).json({ message: "Không tìm thấy hệ thống rạp." });
  }

  //   check duplicate
  const duplicate = await Branch.findOne({ maCumRap }).lean().exec();
  if (duplicate) {
    return res.status(409).json({ message: "Cụm rạp đã tồn tại." });
  }

  //create new carousel
  const branchObject = {
    maHeThongRap,
    logoHeThongRap: theater.logo,
    maCumRap,
    tenCumRap,
    diaChi,
    soDienThoai,
    rap,
  };
  const newBranch = await Branch.create(branchObject);

  if (newBranch) {
    res.status(201).json({
      message: `Cụm rạp đã được thêm thành công. `,
    });
  } else {
    res.status(400).json({ message: "Tạo mới cụm rạp không thành công." });
  }
});

module.exports = createNewBranch;
