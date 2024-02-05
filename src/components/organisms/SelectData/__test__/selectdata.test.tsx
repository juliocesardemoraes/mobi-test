import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux"; // Assuming you have a Redux store provider
import SelectData from "../SelectData";
import { IVehicleInfo, RequestTypes, RequestsMapper } from "@/types/fipe";
import { store } from "@/lib/store";
import { addBrands } from "@/lib/features/fipe/fipe-slice";

// Mock the dispatch function for the setSelected prop
const mockSetSelected = jest.fn();

const mockContent: IVehicleInfo[] = [
  { name: "carros", code: "cars" },
  { name: "motos", code: "motorcycles" },
  { name: "caminhões", code: "trucks" },
];

const renderComponent = (dataAccessor: RequestTypes, selected: string) => {
  render(
    <Provider store={store}>
      <SelectData
        dataAcessor={dataAccessor}
        setSelected={mockSetSelected}
        selected={selected}
      />
    </Provider>
  );
};

describe("SelectData", () => {
  beforeEach(() => {
    store.dispatch(addBrands(mockContent));
  });

  it("It renders with the correct label and using redux store", () => {
    const dataAccessor = "brands";
    const selectedValue = mockContent[0].code;

    renderComponent(dataAccessor, selectedValue);

    const labelName = screen.getByTestId("label-jest-test");
    expect(labelName).toBeInTheDocument();
    expect(labelName).toHaveTextContent(RequestsMapper[dataAccessor]);
  });

  it("It renders with the correct label and using redux store", () => {
    const dataAccessor = "brands";
    const selectedValue = mockContent[0].code;

    renderComponent(dataAccessor, selectedValue);
  });
});
