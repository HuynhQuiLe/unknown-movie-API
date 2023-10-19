const express = require("express");
const getAllUsers = require("../controllers/user/getAllUsersController");
const register = require("../controllers/user/registerController");
const login = require("../controllers/user/loginController");
const getUserByID = require("../controllers/user/getUserByIDController");
const deleteUser = require("../controllers/user/deleteUserController");
const updateUser = require("../controllers/user/updateUserController");

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/:id").get(getUserByID).delete(deleteUser).put(updateUser);
router.route("/register").post(register);
router.route("/login").post(login);

module.exports = router;
