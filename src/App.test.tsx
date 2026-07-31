import { render, screen } from "@testing-library/react";
import App from "./App";

// Deliberately a render test rather than a unit test: it is the only thing in
// the scaffold that exercises jsdom, Testing Library, the setup file's jest-dom
// matchers and colorjs.io together. A unit test would prove none of them.
describe("App", () => {
  it("renders the seed converted to OKLCH", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { level: 1, name: "oklch-studio" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("oklch(54.134% 0.24659 293.01)"),
    ).toBeInTheDocument();
  });
});
