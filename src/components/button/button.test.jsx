import { render, screen } from "@testing-library/react";
import Button from "./button"; // Adjust the import based on your folder structure
import "@testing-library/jest-dom"; // For the 'toBeInTheDocument' matcher
import userEvent from "@testing-library/user-event";

describe("Button Component", () => {
  // Test if the button renders with default text
  it("should render with default text", () => {
    render(<Button />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Click me"); // Default text
  });

  // Test if the button renders with custom text
  it("should render with custom text", () => {
    render(<Button text="Submit" />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Submit");
  });

  // Test if the button handles the onClick event
  it("should call the onClick function when clicked", async () => {
    const onClickMock = vi.fn(); // Use Vitest's vi.fn() for mocking
    const user = userEvent.setup();
    render(<Button onClick={onClickMock} />);
    const button = screen.getByRole("button");
    await user.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1); // Ensure the mock function was called once
  });

  // Test if buttonType "submit" applies the correct styles
  it("should apply the correct style for submit button", () => {
    render(<Button buttonType="submit" />);
    const button = screen.getByRole("button");
    expect(button.classList.length).toBeGreaterThanOrEqual(2); // Check if the button has the expected class name (style) in addition to default button
  });

  // Test for passing an additional className
  it("should accept an additional className", () => {
    render(<Button className="extra-class" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("extra-class"); // Check if the button has the additional class
  });
});
