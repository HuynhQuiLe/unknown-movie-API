const mongoose = require("mongoose");

const BranchSchema = new mongoose.Schema(
  {
    maHeThongRap: {
      type: String,
      required: true,
    },
    logoHeThongRap: {
      type: String,
      required: false,
    },
    maCumRap: {
      type: String,
      required: true,
    },
    tenCumRap: {
      type: String,
      required: true,
    },
    diaChi: {
      type: String,
      required: true,
    },
    soDienThoai: {
      type: String,
      required: true,
    },
    trangThai: {
      type: String,
      default: "Active",
    },
    rap: {
      type: Array,
      require: true,
    },
  },
  {
    timestamps: { createdAt: "created_at" },
  }
);

module.exports = mongoose.model("Branch", BranchSchema);
