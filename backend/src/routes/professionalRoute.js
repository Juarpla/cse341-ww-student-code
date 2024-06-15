const express = require("express");
const router = new express.Router();
const professionalController = require("../controllers/professionalController");



router.get(
    "/",
    professionalController.getProJSON
);

module.exports = router;