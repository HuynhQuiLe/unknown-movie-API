const asyncHandler = require("express-async-handler");
const Carousel = require("../../models/Carousel");

const getCarouselByID = asyncHandler(async (req, res) => {
  const { id } = req.params;
  //check empty
  if (!id) {
    return res.status(400).json({ message: "ID carousel là bắt buộc." });
  }

  //check exist

  const carousel = await Carousel.findById(id).lean().exec();

  if (!carousel) {
    return res.status(404).json({ message: "Không tìm thấy carousel." });
  }
  res.status(200).json({ message: "Tìm thấy carousel thành công", carousel });
});

module.exports = getCarouselByID;
