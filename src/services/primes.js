/**
 * Generates an array of prime numbers less than the given number.
 * @param {number} n - The upper limit for generating prime numbers.
 * @return {number[]} - An array of prime numbers.
 */
function generatePrimes(n) {
  try {
    const primes = [];
    const sieve = new Array(n).fill(true);

    for (let p = 2; p * p <= n; p++) {
      if (sieve[p]) {
        for (let i = p * p; i <= n; i += p) {
          sieve[i] = false;
        }
      }
    }

    for (let p = 2; p <= n; p++) {
      if (sieve[p]) {
        primes.push(p);
      }
    }

    return primes;
  } catch (error) {
    throw error;
  }
}

/**
 * Finds the median prime numbers less than the given number.
 * @param {number} n - The upper limit for generating prime numbers.
 * @return {number[]} - The median prime number(s).
 */
function findMedianPrimes(n) {
  try {
    if (n < 2) {
      return [];
    }

    const primes = generatePrimes(n);
    const middle = Math.floor(primes.length / 2);

    return primes.length % 2
      ? [primes[middle]]
      : [primes[middle - 1], primes[middle]];
  } catch (error) {
    throw error;;
  }
}

module.exports = { findMedianPrimes, generatePrimes };
