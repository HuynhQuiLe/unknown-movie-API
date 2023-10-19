const express = require("express");
const getAllCarousels = require("../controllers/carousel/getAllCarouselsControllers");
const createCarousel = require("../controllers/carousel/createCarouselController");
const getCarouselByID = require("../controllers/carousel/getCarouselByIDController");
const deleteCarousel = require("../controllers/carousel/deleteCarouselController");
const updateCarousel = require("../controllers/carousel/updateCarouselController");

const router = express.Router();

router.route("/").get(getAllCarousels).post(createCarousel);
router
  .route("/:id")
  .get(getCarouselByID)
  .delete(deleteCarousel)
  .put(updateCarousel);

module.exports = router;
