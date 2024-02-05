import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar";

describe("Navbar", () => {
  it("Renders the navbar and expects the text to work and the button functionality", () => {
    render(<Navbar />);

    const mainText = screen.getByText("MobiFipeChecker");
    const secundaryText = screen.getByText("Voltar para a página principal");
    fireEvent.click(mainText);
    fireEvent.click(secundaryText);

    expect(mainText).toBeInTheDocument();
    expect(mainText).toHaveTextContent("MobiFipeChecker");
    expect(secundaryText).toBeInTheDocument();
    expect(secundaryText).toHaveTextContent("Voltar para a página principal");
  });
});
