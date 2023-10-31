const asyncHandler = require("express-async-handler");
const Ticket = require("../../models/Ticket");

const getAllTicketByUser = asyncHandler(async (req, res) => {
  const { IDNguoiDung } = req.params;
  //check empty
  if (!IDNguoiDung) {
    return res.status(400).json({ message: "ID người dùng là bắt buộc." });
  }

  //check exist

  const tickets = await Ticket.find({ IDNguoiDung }).lean().exec();

  if (!tickets.length) {
    return res
      .status(200)
      .json({ message: "Bạn chưa đặt vé xem phim nào.", tickets });
  }

  res.status(200).json({ message: "Tìm thấy vé phim thành công", tickets });
});

module.exports = getAllTicketByUser;
