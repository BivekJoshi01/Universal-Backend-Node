const express = require("express");

const {
  addArea,
  getAllAreas,
} = require("../../controllers/customerSuppliersController/area.controller");

const router = express.Router();

router.route("/area").post(addArea);
router.route("/area/getAll").get(getAllAreas);


module.exports = router;
