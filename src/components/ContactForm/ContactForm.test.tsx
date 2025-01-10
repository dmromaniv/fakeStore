import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { jest } from "@jest/globals";

import { toast } from "react-toastify";

import ContactForm from "./ContactForm";

jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
  },
}));

describe("ContactForm", () => {
  const mockSubmit = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    render(<ContactForm onContactFormSubmit={mockSubmit} />);
  });

  it("renders form inputs and submit button", () => {
    expect(screen.getByText("Full Name")).toBeInTheDocument();
    expect(screen.getByText("Phone Number")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("shows validation errors when inputs are empty", async () => {
    fireEvent.click(screen.getByText("Submit"));

    expect(await screen.findByText("Name is required")).toBeInTheDocument();
    expect(
      await screen.findByText("Phone number must be 10 digits"),
    ).toBeInTheDocument();
  });

  it("submits the form successfully with valid inputs", async () => {
    fireEvent.change(screen.getByTestId("fullName-input"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByTestId("phoneNumber-input"), {
      target: { value: "1234567890" },
    });

    fireEvent.click(screen.getByText("Submit"));

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith("The order has been accepted");
      expect(mockSubmit).toHaveBeenCalled();
    });
  });
});
