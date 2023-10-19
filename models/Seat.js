const mongoose = require("mongoose");

const SeatSchema = new mongoose.Schema(
  {
    maSuatChieu: {
      type: String,
      required: true,
    },
    maPhim: {
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
    ngay: {
      type: String,
      required: true,
    },
    gio: {
      type: String,
      required: true,
    },
    seatMap: {
      type: Array,
      required: true,
      default: [
        {
          hang: "",
          danhSachGhe: [
            {
              soGhe: "1",
              note: "hang",
            },
            {
              soGhe: "2",
              note: "hang",
            },
            {
              soGhe: " ",
              note: "LOI_DI",
            },
            {
              soGhe: "3",
              note: "hang",
            },
            {
              soGhe: "4",
              note: "hang",
            },
            {
              soGhe: "5",
              note: "hang",
            },
            {
              soGhe: "6",
              note: "hang",
            },
            {
              soGhe: "7",
              note: "hang",
            },
            {
              soGhe: "8",
              note: "hang",
            },
            {
              soGhe: "9",
              note: "hang",
            },
            {
              soGhe: "10",
              note: "hang",
            },
            {
              soGhe: "11",
              note: "hang",
            },
            {
              soGhe: "12",
              note: "hang",
            },
            {
              soGhe: "13",
              note: "hang",
            },
            {
              soGhe: "14",
              note: "hang",
            },
            {
              soGhe: "15",
              note: "hang",
            },
            {
              soGhe: "16",
              note: "hang",
            },
            {
              soGhe: " ",
              note: "LOI_DI",
            },
            {
              soGhe: "17",
              note: "hang",
            },
            {
              soGhe: "18",
              note: "hang",
            },
          ],
        },
        {
          hang: "A",
          danhSachGhe: [
            {
              soGhe: "A1",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "A2",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: " ",
              note: "LOI_DI",
            },
            {
              soGhe: "A3",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "A4",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "A5",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "A6",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "A7",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "A8",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "A9",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "A10",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "A11",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "A12",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "A13",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "A14",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "A15",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "A16",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: " ",
              note: "LOI_DI",
            },
            {
              soGhe: "A17",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "A18",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
          ],
        },
        {
          hang: "B",
          danhSachGhe: [
            {
              soGhe: "B1",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "B2",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: " ",
              note: "LOI_DI",
            },
            {
              soGhe: "B3",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "B4",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "B5",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "B6",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "B7",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "B8",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "B9",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "B10",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "B11",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "B12",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "B13",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "B14",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "B15",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "B16",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: " ",
              note: "LOI_DI",
            },
            {
              soGhe: "B17",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "B18",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
          ],
        },
        {
          hang: "C",
          danhSachGhe: [
            {
              soGhe: "C1",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "C2",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: " ",
              note: "LOI_DI",
            },
            {
              soGhe: "C3",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "C4",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "C5",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "C6",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "C7",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "C8",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "C9",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "C10",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "C11",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "C12",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "C13",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "C14",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "C15",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "C16",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: " ",
              note: "LOI_DI",
            },
            {
              soGhe: "C17",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "C18",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
          ],
        },
        {
          hang: "D",
          danhSachGhe: [
            {
              soGhe: "D1",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "D2",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: " ",
              note: "LOI_DI",
            },
            {
              soGhe: "D3",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "D4",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "D5",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "D6",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "D7",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "D8",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "D9",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "D10",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "D11",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "D12",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "D13",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "D14",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "D15",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "D16",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: " ",
              note: "LOI_DI",
            },
            {
              soGhe: "D17",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "D18",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
          ],
        },
        {
          hang: "E",
          danhSachGhe: [
            {
              soGhe: "E1",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "E2",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: " ",
              note: "LOI_DI",
            },
            {
              soGhe: "E3",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "E4",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "E5",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "E6",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "E7",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "E8",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "E9",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "E10",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "E11",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "E12",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "E13",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "E14",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "E15",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "E16",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: " ",
              note: "LOI_DI",
            },
            {
              soGhe: "E17",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "E18",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
          ],
        },
        {
          hang: "F",
          danhSachGhe: [
            {
              soGhe: "F1",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "F2",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: " ",
              note: "LOI_DI",
            },
            {
              soGhe: "F3",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "F4",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "F5",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "F6",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "F7",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "F8",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "F9",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "F10",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "F11",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "F12",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "F13",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "F14",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "F15",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "F16",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: " ",
              note: "LOI_DI",
            },
            {
              soGhe: "F17",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "F18",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
          ],
        },
        {
          hang: "G",
          danhSachGhe: [
            {
              soGhe: "G1",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "G2",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: " ",
              note: "LOI_DI",
            },
            {
              soGhe: "G3",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "G4",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "G5",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "G6",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "G7",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "G8",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "G9",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "G10",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "G11",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "G12",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "G13",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "G14",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "G15",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "G16",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: " ",
              note: "LOI_DI",
            },
            {
              soGhe: "G17",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "G18",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
          ],
        },
        {
          hang: "H",
          danhSachGhe: [
            {
              soGhe: "H1",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "H2",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: " ",
              note: "LOI_DI",
            },
            {
              soGhe: "H3",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "H4",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "H5",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "H6",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "H7",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "H8",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "H9",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "H10",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "H11",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "H12",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "H13",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "H14",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "H15",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "H16",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: " ",
              note: "LOI_DI",
            },
            {
              soGhe: "H17",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
            {
              soGhe: "H18",
              gia: 199,
              daDat: false,
              note: "ghe",
            },
          ],
        },
      ],
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("Seat", SeatSchema);
