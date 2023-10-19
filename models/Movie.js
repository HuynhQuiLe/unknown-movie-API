const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    maPhim: {
      type: Number,
      required: true,
    },
    tenPhim: {
      type: String,
      required: true,
    },
    moTa: {
      type: String,
      required: true,
    },
    trailer: {
      type: String,
      required: true,
    },
    theLoai: {
      type: String,
      required: true,
    },
    khoiChieu: {
      type: Date,
      required: true,
    },
    doiTuong: {
      type: String,
      required: true,
    },
    hinhChinh: {
      type: String,
      required: true,
    },
    hinhNhanVat: {
      type: String,
      required: true,
      default:
        "https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp",
    },
    hinhChu: {
      type: String,
      required: true,
      default:
        "https://ggayane.github.io/css-experiments/cards/dark_rider-title.png",
    },
    hinhPhu: {
      type: Array,
      required: true,
    },
    chiTiet: {
      daoDien: {
        type: String,
        required: true,
      },
      dienVien: {
        type: String,
        required: true,
      },
      thoiLuong: {
        type: Number,
        required: true,
      },
      xuatXu: {
        type: String,
        required: true,
      },
      danhGia: {
        diem: {
          type: Number,
          default: 0,
        },
        luotDanhGia: {
          type: Number,
          default: 0,
        },
      },
      binhLuan: {
        type: Array,
        default: [],
      },
    },
    hienThiPhim: {
      type: Boolean,
      default: true,
    },
    phimHot: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: { createdAt: "created_at" },
  }
);

module.exports = mongoose.model("Movie", MovieSchema);
