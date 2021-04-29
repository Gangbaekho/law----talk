const express = require("express");

const testController = require("../controllers/test");

const router = express.Router();

router.get("/", testController.test);

router.get("/session", testController.sessionTest);

module.exports = router;
