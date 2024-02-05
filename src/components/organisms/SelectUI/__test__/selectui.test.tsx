import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux"; // Assuming you have a Redux store provider
import { IVehicleInfo } from "@/types/fipe";
import SelectUI from "../SelectUI";

// Mock the dispatch function for the setSelected prop
const mockSetSelected = jest.fn();

const mockContent: IVehicleInfo[] = [
  { name: "carros", code: "cars" },
  { name: "motos", code: "motorcycles" },
  { name: "caminhões", code: "trucks" },
];

describe("SelectData", () => {
  it("It renders with the correct label", () => {
    render(
      <SelectUI
        labelName="Marcas"
        content={mockContent}
        setSelected={mockSetSelected}
        selected={mockContent[0].code}
      />
    );
    const labelName = screen.getByTestId("label-jest-test");
    expect(labelName).toBeInTheDocument();
    expect(labelName).toHaveTextContent("Marcas");
  });

  it("It should render the content properly", () => {
    render(
      <SelectUI
        labelName="Marcas"
        content={mockContent}
        setSelected={mockSetSelected}
        selected={mockContent[0].code}
      />
    );

    for(let i=0; i<mockContent.length;i++){
      
    }

    //expect(labelName).toBeInTheDocument();
    //expect(labelName).toHaveTextContent("Marcas");
  });
  it("It renders with the correct label and using redux store", () => {});
  it("It renders with the correct label and using redux store", () => {});
});
