import { render, screen } from "@testing-library/react";
import ButtonUI from "../Button";

describe("ButtonUI", () => {
  it("renders a button with the specified text", () => {
    const buttonText = "Click me";
    render(<ButtonUI text={buttonText} type="button" />);

    // Use the getByText query to find the button by its text content
    const buttonElement = screen.getByText(buttonText);

    // Assert that the button element exists
    expect(buttonElement).toBeInTheDocument();

    // Optionally, you can also check the button's text content
    expect(buttonElement).toHaveTextContent(buttonText);
  });

  // Add more test cases as needed for different scenarios, e.g., testing onClick functionality, disabled state, etc.
});
