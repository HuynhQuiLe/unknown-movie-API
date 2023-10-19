const express = require("express");
const getAllBranches = require("../controllers/branch/getAllBranchesController");
const createNewBranch = require("../controllers/branch/createNewBranchController");
const getBranchByMaCumRap = require("../controllers/branch/getBranchByMaCumRapController");
const deleteBranch = require("../controllers/branch/deleteBranchController");
const updateBranch = require("../controllers/branch/updateBranchController");

const router = express.Router();

router.route("/").get(getAllBranches).post(createNewBranch);
router
  .route("/:maCumRap")
  .get(getBranchByMaCumRap)
  .delete(deleteBranch)
  .put(updateBranch);

module.exports = router;
