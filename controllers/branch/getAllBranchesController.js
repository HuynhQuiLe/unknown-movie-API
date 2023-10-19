const asyncHandler = require("express-async-handler");
const Branch = require("../../models/Branch");

const getAllBranches = asyncHandler(async (req, res) => {
  const branches = await Branch.find().lean().exec();

  if (!branches?.length) {
    return res
      .status(400)
      .json({ message: "Không tìm thấy danh sách cụm rạp" });
  }

  return res
    .status(200)
    .json({ message: "Lấy danh sách cụm rạp thành công.", branches });
});

module.exports = getAllBranches;
