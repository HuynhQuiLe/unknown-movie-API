const express = require("express");
const auth = require("../middleware/verifyToken");
const router = express.Router();

// router.get("/", auth, (req, res) => {
//   // neu muo0n tim thong tin nguoi dung: User.findOne({_id: req.user._id})
//   return res
//     .status(200)
//     .json({
//       post: { title: "dong 1", content: "Noi dung", user: req.user._id },
//     });
// });

router.route("/").get(auth, (req, res) => {
  // neu muo0n tim thong tin nguoi dung: User.findOne({_id: req.user._id})
  return res.status(200).json({
    post: { title: "dong 1", content: "Noi dung", user: req.user._id },
  });
});

module.exports = router;
