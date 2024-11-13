import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Text if the buttons functions properly", () => {
  it("button increases", () => {
    render(<App />);

    const headerElement = screen.getByTestId("header-2");
    const buttonElement1 = screen.getByRole("button", { name: /increment/i });

    fireEvent.click(buttonElement1);
    expect(headerElement.textContent).toBe("1");
  });

  it("button decreases", () => {
    render(<App />);

    const headerElement = screen.getByTestId("header-2");
    const buttonElement2 = screen.getByRole("button", { name: /decrement/i });

    fireEvent.click(buttonElement2);
    expect(headerElement.textContent).toBe("-1");
  });

  it("button reset back to 0", () => {
    render(<App />);

    const headerElement = screen.getByTestId("header-2");
    const buttonElement3 = screen.getByRole("button", { name: /reset/i });

    fireEvent.click(buttonElement3);
    expect(headerElement.textContent).toBe("0");
  });
});
