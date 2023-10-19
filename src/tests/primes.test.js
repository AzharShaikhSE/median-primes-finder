const { expect } = require("chai");
const { generatePrimes, findMedianPrimes } = require("../services/primes");

describe("Primes Service", () => {
  describe("generatePrimes", () => {
    it("should generate an array of prime numbers", () => {
      const n = 10;
      const primes = generatePrimes(n);

      expect(primes).to.be.an("array");
      expect(primes).to.deep.equal([2, 3, 5, 7]);
    });

    it("should return an empty array when n is less than 2", () => {
      const n = 1;
      const primes = generatePrimes(n);

      expect(primes).to.deep.equal([]);
    });

    it("should generate an array of prime numbers up to n", () => {
      const n = 20;
      const primes = generatePrimes(n);

      expect(primes).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19]);
    });

    // Add more test cases as needed
  });

  describe("findMedianPrimes", () => {
    it("should find the median prime number(s)", () => {
      const n = 10;
      const medianPrimes = findMedianPrimes(n);

      expect(medianPrimes).to.be.an("array");
      // Add more assertions as needed
    });

    it("should return an empty array when n is less than 2", () => {
      const n = 1;
      const medianPrimes = findMedianPrimes(n);

      expect(medianPrimes).to.deep.equal([]);
    });

    it("should find the median prime number(s) up to n", () => {
      const n = 18;
      const medianPrimes = findMedianPrimes(n);

      expect(medianPrimes).to.deep.equal([7]);
    });

  });
});