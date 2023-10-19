const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    maPhim: {
      type: Number,
      required: true,
    },
    maNguoiDung: {
      type: String,
      required: true,
    },
    tenNguoiDung: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    noiDung: {
      type: String,
      required: true,
    },
    like: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: { createdAt: "created_at" },
  }
);

module.exports = mongoose.model("Comment", CommentSchema);
