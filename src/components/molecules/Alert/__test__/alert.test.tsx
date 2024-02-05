import { render, screen, fireEvent } from "@testing-library/react";
import AlertComponent from "../Alert";
import { store } from "@/lib/store";
import { Provider } from "react-redux";

const renderComponent = (
  severity: "success" | "error" | "warning" | "info",
  buttonText: string
) => {
  render(
    <Provider store={store}>
      <AlertComponent severity={severity} message={buttonText} />
    </Provider>
  );
};
describe("ButtonUI", () => {
  it("renders alert to render properly", () => {
    const buttonText = "well done!";

    renderComponent("success", buttonText);
    const buttonElement = screen.getByText(buttonText);

    // Test onclick for 100% functions in coverage
    fireEvent.click(buttonElement);

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(buttonText);
  });
});
