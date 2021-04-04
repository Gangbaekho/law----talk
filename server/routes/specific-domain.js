const express = require("express");

const SpecificDomainController = require("../controllers/specific-domain");

const router = express.Router();

router.post("/", SpecificDomainController.createSpecificDomain);

module.exports = router;
