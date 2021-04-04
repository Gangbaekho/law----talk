const express = require("express");

const laywerController = require("../controllers/lawyer");

const router = express.Router();

router.post("/", laywerController.createLawyer);

module.exports = router;
