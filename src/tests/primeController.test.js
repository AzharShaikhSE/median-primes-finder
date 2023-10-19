const { expect } = require("chai");
const sinon = require("sinon");
const { getMedianPrimes } = require("../controllers/primesController");
const primesService = require("../services/primes");

describe("Primes Controller", () => {
  describe("getMedianPrimes", () => {
    it("should return an array of median primes as JSON in the response", () => {
      const req = { query: { n: "10" } };
      const res = {
        status: function (statusCode) {
          expect(statusCode).to.equal(200);
          return this;
        },
        json: function (data) {
          expect(data).to.be.an("array");
          expect(data).to.have.lengthOf(2);
          expect(data).to.deep.equal([3, 5]);
        }
      };

      getMedianPrimes(req, res);
    });

    it("should handle invalid input and return a 400 status code", () => {
      const req = { query: { n: "abc" } };
      const res = {
        status: function (statusCode) {
          expect(statusCode).to.equal(400);
          return this;
        },
        send: function (message) {
          expect(message).to.equal("Invalid input limit");
        }
      };

      getMedianPrimes(req, res);
    });

    it("should return an empty array if the input number is less than or equal to 2", () => {
      const req = { query: { n: "2" } };
      const res = {
        status: function (statusCode) {
          expect(statusCode).to.equal(200);
          return this;
        },
        json: function (data) {
          expect(data).to.be.an("array");
          expect(data).to.have.lengthOf(0);
        }
      };

      getMedianPrimes(req, res);
    });

    it("should return a 400 status code and an error message if the input number is greater than 50 million", () => {
      const req = { query: { n: "50000001" } };
      const res = {
        status: function (statusCode) {
          expect(statusCode).to.equal(400);
          return this;
        },
        send: function (message) {
          expect(message).to.equal(
            "Input limit too large, Please use a number lower than 50M"
          );
        }
      };

      getMedianPrimes(req, res);
    });

    it("should return a 400 status code and an error message if the input number is invalid", () => {
      const req = { query: { n: "-10" } };
      const res = {
        status: function (statusCode) {
          expect(statusCode).to.equal(400);
          return this;
        },
        send: function (message) {
          expect(message).to.equal("Invalid input limit");
        }
      };

      getMedianPrimes(req, res);
    });

    it("should handle failure in findMedianPrimes", () => {

      const findMedianPrimesStub = sinon.stub(primesService, "findMedianPrimes");
      findMedianPrimesStub.throws(new Error("Failure"));

      const req = { query: { n: "100000000000" } };
      const res = {
        status: function (statusCode) {
          expect(statusCode).to.equal(500);
          return this;
        },
        send: function (message) {
          expect(message).to.equal("Server Issue, Please try again.");
        }
      };

      getMedianPrimes(req, res);

      // Restore the original findMedianPrimes function
      findMedianPrimesStub.restore();
    });

  });
});
