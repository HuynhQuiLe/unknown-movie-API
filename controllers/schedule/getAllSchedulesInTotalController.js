const asyncHandler = require("express-async-handler");
const Theater = require("../../models/Theater");
const Branch = require("../../models/Branch");
const Movie = require("../../models/Movie");

const getAllSchedulesInTotal = asyncHandler(async (req, res) => {
  const theaters = await Theater.find()
    .select("-trangThai")
    .select("-created_at")
    .select("-updatedAt")
    .select("-__v")
    .select("-_id")
    .select("-tenHeThongRap")
    .lean()
    .exec();
  const branches = await Branch.find()
    .select("-logoHeThongRap")
    .select("-soDienThoai")
    .select("-trangThai")
    .select("-created_at")
    .select("-updatedAt")
    .select("-_id")
    .select("-__v")
    .select("-rap")
    .lean()
    .exec();
  const movies = await Movie.find()
    .select("maPhim")
    .select("tenPhim")
    .select("hinhChinh")
    .select("doiTuong")
    .select("khoiChieu")
    .select("chiTiet")
    .lean()
    .exec();

  const listLichChieu0 = [
    {
      ngay: "27/10/2023",
      gio: ["11:40", "14:00", "17:00", "20:00", "21:15"],
    },
    {
      ngay: "29/10/2023",
      gio: ["10:40", "14:10", "18:10", "19:45", "22:15"],
    },
    {
      ngay: "12/11/2023",
      gio: ["09:40", "13:50", "15:00", "23:00", "23:55"],
    },
  ];

  const listLichChieu1 = [
    {
      ngay: "02/10/2023",
      gio: ["01:40", "10:00", "12:00", "16:30", "22:15"],
    },
    {
      ngay: "15/10/2023",
      gio: ["10:00", "15:10", "18:00", "18:45", "23:15"],
    },
    {
      ngay: "11/11/2023",
      gio: ["11:40", "12:50", "17:40", "21:00", "20:55"],
    },
  ];

  const listLichChieu2 = [
    {
      ngay: "02/12/2023",
      gio: ["14:00", "17:00"],
    },
    {
      ngay: "29/01/2024",
      gio: ["11:40", "17:10", "20:15", "22:00"],
    },
    {
      ngay: "31/01/2024",
      gio: ["08:40", "11:30", "15:00", "22:10", "23:50", "23:55"],
    },

    {
      ngay: "31/07/2024",
      gio: ["10:10", "13:20", "14:45", "23:05", "23:50"],
    },
  ];

  const listLichChieu3 = [
    {
      ngay: "12/12/2023",
      gio: ["13:00", "18:20"],
    },
  ];

  const newMovie = movies.map((movie, index) => {
    let thoiLuong = movie.chiTiet.thoiLuong;
    const removeProp = "chiTiet";

    const { [removeProp]: remove, ...rest } = movie;

    let listLichChieu = null;
    if (index === 1) {
      listLichChieu = listLichChieu1;
    } else {
      if (index === 0 || index % 10 === 0) {
        listLichChieu = listLichChieu0;
      } else if (index === 2 || index % 2 === 0) {
        listLichChieu = listLichChieu2;
      } else if (index === 3 || index % 3 === 0) {
        listLichChieu = listLichChieu3;
      } else {
        listLichChieu = listLichChieu1;
      }
    }

    return {
      ...rest,
      thoiLuong,
      listLichChieu,
    };
  });

  let response = theaters.map((theater, index) => {
    const maHeThongRap = theater.maHeThongRap;

    const cumRap = branches.filter(
      (branch) => branch.maHeThongRap === maHeThongRap
    );

    const clone = cumRap.map((CR, index) => {
      return {
        ...CR,
        danhSachPhim: newMovie.filter((item, ind) => {
          if (ind < 3) {
            return (ind !== index) & (ind !== index + 2);
          } else {
            return ind !== 1 && ind !== 2 && ind !== 3;
          }
        }),
      };
    });

    return { ...theater, danhSachCumRap: clone };
  });

  return res.status(200).json({
    message: "Lấy danh sách lịch chiếu phim thành công.",
    list: response,
  });
});

module.exports = getAllSchedulesInTotal;
