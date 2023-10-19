const mongoose = require("mongoose");

const TheaterSchema = new mongoose.Schema(
  {
    tenHeThongRap: {
      type: String,
      required: true,
    },
    maHeThongRap: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    trangThai: {
      type: String,
      default: "Active",
    },
  },
  {
    timestamps: { createdAt: "created_at" },
  }
);

module.exports = mongoose.model("Theater", TheaterSchema);
