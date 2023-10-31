const express = require("express");
const createTicket = require("../controllers/ticket/createTicketController");
const getAllTicketByUser = require("../controllers/ticket/getAllTicketByUserController");

const router = express.Router();

router.route("/").post(createTicket);
router.route("/:IDNguoiDung").get(getAllTicketByUser);

module.exports = router;
