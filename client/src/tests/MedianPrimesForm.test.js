import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MedianPrimesForm from "../components/MedianPrimesForm/MedianPrimesForm";

describe("MedianPrimesForm", () => {
  it("renders the form with input and submit button", () => {
    render(<MedianPrimesForm />);
    const inputElement = screen.getByLabelText("Enter upper limit:");
    const submitButton = screen.getByText("Submit");
    expect(inputElement).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("displays 'Submit' on not loading", () => {
    render(<MedianPrimesForm />);
    const submitButton = screen.getByText("Submit");
    expect(submitButton).toBeInTheDocument();
  });

  it("submits the form and displays results", async () => {
    render(<MedianPrimesForm />);
    const inputElement = screen.getByLabelText("Enter upper limit:");
    const submitButton = screen.getByText("Submit");

    // Simulate a successful response from the backend
    const mockResponse = [3, 5];
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
      ok: true
    });

    fireEvent.change(inputElement, { target: { value: "10" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Median Primes: 3, 5")).toBeInTheDocument();
    });
  });

  it("handles an error response", async () => {
    render(<MedianPrimesForm />);
    const inputElement = screen.getByLabelText("Enter upper limit:");
    const submitButton = screen.getByText("Submit");

    // Simulate an error response from the backend
    const mockResponse = { message: "Invalid input limit" };
    global.fetch = jest.fn().mockRejectedValueOnce(mockResponse);

    fireEvent.change(inputElement, { target: { value: "-1" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const element = screen.getByText("Error: Invalid input limit");

      expect(element).toBeInTheDocument();
    });
  });

  it("handles a response with no prime median", async () => {
    render(<MedianPrimesForm />);
    const inputElement = screen.getByLabelText("Enter upper limit:");
    const submitButton = screen.getByText("Submit");

    // Simulate a response with no prime median from the backend
    const mockResponse = [];
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
      ok: true
    });

    fireEvent.change(inputElement, { target: { value: "1" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("No prime median found")).toBeInTheDocument();
    });
  });
});
