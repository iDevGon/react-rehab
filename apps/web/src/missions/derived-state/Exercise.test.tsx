import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import Exercise from "./Exercise";

describe("derived-state mission", () => {
  test("shows total quantity and total price from cart rows", () => {
    render(<Exercise />);

    expect(screen.getByText("Total quantity: 6")).toBeInTheDocument();
    expect(screen.getByText("Total price: $50.00")).toBeInTheDocument();
  });

  test("derives selected count from checked items", async () => {
    const user = userEvent.setup();

    render(<Exercise />);

    await user.click(screen.getByRole("checkbox", { name: /coffee beans/i }));
    await user.click(screen.getByRole("checkbox", { name: /paper filters/i }));

    expect(screen.getByText("Selected items: 2")).toBeInTheDocument();
  });

  test("updates totals when quantities change", async () => {
    const user = userEvent.setup();

    render(<Exercise />);

    await user.click(screen.getByRole("button", { name: /increase coffee beans/i }));
    await user.click(screen.getByRole("button", { name: /decrease paper filters/i }));

    expect(screen.getByText("Total quantity: 6")).toBeInTheDocument();
    expect(screen.getByText("Total price: $60.00")).toBeInTheDocument();
  });
});
