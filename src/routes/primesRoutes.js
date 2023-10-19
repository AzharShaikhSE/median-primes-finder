const express = require("express");
const router = express.Router();
const { getMedianPrimes } = require("../controllers/primesController");

router.get("/median-primes", getMedianPrimes);

module.exports = router;
