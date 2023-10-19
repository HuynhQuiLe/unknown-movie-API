const asyncHandler = require("express-async-handler");
const Branch = require("../../models/Branch");

const getBranchByMaCumRap = asyncHandler(async (req, res) => {
  const { maCumRap } = req.params;
  //check empty
  if (!maCumRap) {
    return res.status(400).json({ message: "Mã cụm rạp là bắt buộc." });
  }

  //check exist

  const branchByMaCumRap = await Branch.findOne({ maCumRap }).lean().exec();

  if (!branchByMaCumRap) {
    return res.status(404).json({ message: "Không tìm thấy cụm rạp." });
  }
  res
    .status(200)
    .json({ message: "Tìm thấy cụm rạp thành công", branchByMaCumRap });
});

module.exports = getBranchByMaCumRap;
