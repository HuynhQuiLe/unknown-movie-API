const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema(
  {
    IDNguoiDung: {
      type: String,
      required: true,
    },
    maHeThongRap: {
      type: String,
      required: true,
    },
    maCumRap: {
      type: String,
      required: true,
    },
    maPhim: {
      type: Number,
      required: true,
    },
    ngay: {
      type: String,
      required: true,
    },
    gio: {
      type: String,
      required: true,
    },
    ghe: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: { createdAt: "created_at" },
  }
);

module.exports = mongoose.model("Ticket", TicketSchema);
