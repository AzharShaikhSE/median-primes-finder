import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Median Primes Finder heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/Median Primes Finder/i);
  expect(headingElement).toBeInTheDocument();
});
