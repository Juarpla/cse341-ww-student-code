const express = require("express");
const router = new express.Router();
const professionalController = require("../controllers/professionalController");



router.get(
    "/",
    professionalController.getProfessional
);

module.exports = router;