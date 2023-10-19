const mongoose = require("mongoose");

const CarouselSchema = new mongoose.Schema(
  {
    maPhim: {
      type: Number,
      required: true,
    },
    hinhAnh: {
      type: String,
      required: true,
    },
    trangThai: {
      type: String,
      required: true,
      default: "Active",
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("Carousel", CarouselSchema);
