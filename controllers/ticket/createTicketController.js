const asyncHandler = require("express-async-handler");
const Ticket = require("../../models/Ticket");

const createTicket = asyncHandler(async (req, res) => {
  const { IDNguoiDung, maHeThongRap, maCumRap, maPhim, ngay, gio, ghe } =
    req.body;

  //check empty
  if (
    !IDNguoiDung ||
    !maHeThongRap ||
    !maCumRap ||
    !maPhim ||
    !ngay ||
    !gio ||
    !Array.isArray(ghe) ||
    !ghe.length
  ) {
    return res
      .status(400)
      .json({ message: "Tất cả các trường không được để trống." });
  }

  //create new carousel
  const ticketObject = {
    IDNguoiDung,
    maHeThongRap,
    maCumRap,
    maPhim,
    ngay,
    gio,
    ghe,
  };
  const newTicket = await Ticket.create(ticketObject);

  if (newTicket) {
    res.status(201).json({
      message: `Suất chiếu phim đã được thêm thành công. `,
    });
  } else {
    res
      .status(400)
      .json({ message: "Tạo mới Suất chiếu phim không thành công." });
  }
});

module.exports = createTicket;
