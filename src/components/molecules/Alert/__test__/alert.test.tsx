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
describe("Alert", () => {
  it("renders alert to render properly", () => {
    const buttonText = "well done!";

    renderComponent("success", buttonText);
  });
});
