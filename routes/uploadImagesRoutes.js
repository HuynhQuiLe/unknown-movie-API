const express = require("express");
const {
  uploadImages,
} = require("../controllers/upload/uploadImagesController");

const router = express.Router();

router.route("/").post(uploadImages);

module.exports = router;
