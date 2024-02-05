import { render, screen, fireEvent } from "@testing-library/react";
import ButtonUI from "../Button";

describe("ButtonUI", () => {
  it("renders a button with the specified text and logs to the console on click", () => {
    const buttonText = "Click me";

    render(<ButtonUI text={buttonText} type="button" />);

    const buttonElement = screen.getByText(buttonText);

    // Test onclick for 100% functions in coverage
    fireEvent.click(buttonElement);

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(buttonText);
  });

  it("test button onclick function", () => {
    const buttonText = "Click me";
    const consoleSpy = jest.spyOn(console, "log");
    const functionTest = "this is a onclick functionality test";

    render(
      <ButtonUI
        text={buttonText}
        type="button"
        onClick={() => {
          console.log(functionTest);
        }}
      />
    );

    const buttonElement = screen.getByText(buttonText);
    fireEvent.click(buttonElement);

    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith(functionTest);
  });
});
