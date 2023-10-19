import React, { useState, useMemo } from "react";
import "./MedianPrimesForm.css";

function MedianPrimesForm() {
  // State variables
  const [n, setN] = useState("");
  const [medianPrimes, setMedianPrimes] = useState([]);
  const [error, setError] = useState("");
  const [showNoPrimeMessage, setShowNoPrimeMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form submission handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Start loading

    try {
      const apiUrl = `${window.location.origin}/median-primes?n=${n}`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(await response.text());
      }
      const medianPrimes = await response.json();
      setMedianPrimes(medianPrimes);
      setError("");
      setShowNoPrimeMessage(medianPrimes.length === 0);
    } catch (error) {
      setError(error.message);
      setMedianPrimes([]);
      setShowNoPrimeMessage(true);
    } finally {
      setLoading(false); // Stop loading, whether success or error
    }
  };

  const submitButtonText = useMemo(() => {
    return loading ? "Calculating..." : "Submit";
  }, [loading]);

  return (
    <div className="median-primes-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="upperLimit">Enter upper limit:</label>
        <input
          type="number"
          id="upperLimit"
          value={n}
          onChange={(e) => setN(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="submit-button" disabled={loading}>
          {submitButtonText}
        </button>
      </form>

      <div className="median-primes">
        {!loading && (
          <>
            {medianPrimes.length > 0 ? (
              <div>Median Primes: {medianPrimes.join(", ")}</div>
            ) : error ? (
              <div className="error-message">Error: {error}</div>
            ) : null}

            {showNoPrimeMessage && !medianPrimes.length && !error ? (
              <div className="no-prime-median">No prime median found</div>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}

export default MedianPrimesForm;
