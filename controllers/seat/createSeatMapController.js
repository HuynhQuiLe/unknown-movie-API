const asyncHandler = require("express-async-handler");
const Seat = require("../../models/Seat");

const createSeatMap = asyncHandler(async (req, res) => {
  const { maPhim, maHeThongRap, maCumRap, ngay, gio, maSuatChieu } = req.body;

  //check empty
  if (!maPhim || !maHeThongRap || !maCumRap || !ngay || !gio || !maSuatChieu) {
    return res
      .status(400)
      .json({ message: "Tất cả các trường không được để trống." });
  }

  //   check duplicate
  const duplicate = await Seat.findOne({ maSuatChieu }).lean().exec();
  if (duplicate) {
    return res.status(200).json({ message: "Layout ghế đã tồn tại." });
  }

  //    ok and create
  //   const maSC = `${maCumRap}${maPhim}${ngay}${gio}`;
  const seatObject = {
    maPhim,
    maHeThongRap,
    maCumRap,
    ngay,
    gio,
    maSuatChieu,
  };
  const newSeat = await Seat.create(seatObject);

  if (newSeat) {
    return res.status(201).json({
      message: `Layout ghế đã được thêm thành công. `,
    });
  } else {
    return res
      .status(400)
      .json({ message: "Tạo mới Layout ghế không thành công." });
  }

  //function tao moi
  //create new carousel
  //   const create = async () => {
  //     const maSuatChieu = `${maCumRap}${maPhim}${ngay}${gio}`;
  //     const seatObject = {
  //       maPhim,
  //       maHeThongRap,
  //       maCumRap,
  //       ngay,
  //       gio,
  //       maSuatChieu,
  //     };
  //     const newSeat = await Seat.create(seatObject);

  //     if (newSeat) {
  //       return res.status(201).json({
  //         message: `Layout ghế đã được thêm thành công. `,
  //       });
  //     } else {
  //       return res
  //         .status(400)
  //         .json({ message: "Tạo mới Layout ghế không thành công." });
  //     }
  //   };

  //   //   check exist
  //   const phim = await Seat.find({ maPhim }).lean().exec();
  //   if (phim) {
  //     const HTR = await Seat.find({ maHeThongRap }).lean().exec();
  //     if (HTR) {
  //       const CR = await Seat.find({ maCumRap }).lean().exec();
  //       if (CR) {
  //         const date = await Seat.find({ ngay }).lean().exec();
  //         if (date) {
  //           const hour = await Seat.find({ gio }).lean().exec();
  //           if (hour) {
  //             //Lay out da ton tai
  //             return res.json({ message: "Tạo mới Layout ghế đẫ tồn tại." });
  //           } else {
  //             //tao moi
  //             create();
  //           }
  //         } else {
  //           //tao moi
  //           create();
  //         }
  //       } else {
  //         //tao moi
  //         create();
  //       }
  //     } else {
  //       // tao moi
  //       create();
  //     }
  //   } else {
  //     // tao moi
  //     create();
  //   }
});

module.exports = createSeatMap;
