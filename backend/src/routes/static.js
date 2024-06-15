const express = require("express");
const router = express.Router();

router.use(express.static("../frontend"));
router.use("/css", express.static(__dirname + "../frontend/css"));
router.use("/script", express.static(__dirname + "../frontend/script"));

module.exports = router;