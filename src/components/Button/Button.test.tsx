import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "./Button";

describe("Button", () => {
  it("renders without crashing", () => {
    render(<Button text="Click me" onClick={() => {}} />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button text="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
