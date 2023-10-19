const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    taiKhoan: {
      type: String,
      required: true,
    },
    matKhau: {
      type: String,
      required: true,
    },
    ten: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    hinhAnh: {
      type: String,
      required: true,
      default:
        "https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg",
    },
    chucVu: {
      type: String,
      required: true,
      default: "Customer",
    },
    tinhAnh: {
      type: Number,
      required: true,
      default: Math.floor(Math.random() * 10000),
    },
    lichSu: {
      type: Array,
      required: true,
      default: [],
    },
    trangThai: {
      type: String,
      required: true,
      default: "Active",
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("User", UserSchema);
