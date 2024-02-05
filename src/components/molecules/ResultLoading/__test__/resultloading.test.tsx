import { render, screen } from "@testing-library/react";
import ResultLoading from "../Resultloading";

describe("ResultLoading", () => {
  it("Renders Skeleton components with the specified properties", () => {
    render(<ResultLoading />);

    const skeleton1 = screen.getByTestId("skeleton-1");
    expect(skeleton1).toHaveClass("rounded");
    expect(skeleton1).toBeInTheDocument();

    const skeleton2 = screen.getByTestId("skeleton-2");
    expect(skeleton2).toHaveClass("rounded");
    expect(skeleton2).toBeInTheDocument();

    const skeleton3 = screen.getByTestId("skeleton-3");
    expect(skeleton3).toHaveClass("rounded");
    expect(skeleton3).toBeInTheDocument();
  });
});
