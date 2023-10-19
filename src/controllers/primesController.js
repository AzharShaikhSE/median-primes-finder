const { findMedianPrimes } = require("../services/primes");

/**
 * Function to get the median primes less than the given number.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Array} - The array of median primes as JSON in the response.
 */
function getMedianPrimes(req, res) {
  try {
    const n = parseInt(req.query.n);

    // Check if the input is invalid
    if (isInValid(n)) {
      return res.status(400).send("Invalid input limit");
    } else {
      // Check if n is less than 2
      if (n <= 2) {
        return res.json([]);
      }
      // Check if n is greater than 50 million
      if (n > 50000000) {
        return res
          .status(400)
          .send("Input limit too large, Please use a number lower than 50M");
      }

      // Find the median primes
      const medianPrimes = findMedianPrimes(n);
      return res.json(medianPrimes);
    }
  } catch (error) {
    // Handle the error and return it in the response
    if (
      error instanceof RangeError &&
      error.message === "Invalid array length"
    ) {
      // Throw a RangeError
      return res
        .status(400)
        .send("Input limit too large, Please use a number lower than 50M");
    } else {
      // Handle other errors
      return res.status(500).send("Server Issue, Please try again.");
    }
  }
}

/**
 * Function to check if a number is invalid.
 * @param {number} number - The number to check.
 * @returns {boolean} - True if the number is invalid, false otherwise.
 */
function isInValid(number) {
  return isNaN(number) || number < 0 || !isFinite(number);
}

module.exports = { getMedianPrimes };
