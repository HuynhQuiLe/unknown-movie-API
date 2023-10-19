const express = require("express");
const getAllCommentsByMaPhim = require("../controllers/comment/getAllCommentsByMaPhimController");
const createNewComment = require("../controllers/comment/createNewCommentController");

const router = express.Router();

router.route("/:maPhim").get(getAllCommentsByMaPhim).post(createNewComment);

module.exports = router;
