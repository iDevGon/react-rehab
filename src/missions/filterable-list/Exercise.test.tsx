import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import Exercise from "./Exercise";

describe("filterable-list mission", () => {
  test("searches items by name", async () => {
    const user = userEvent.setup();

    render(<Exercise />);

    await user.type(screen.getByLabelText(/search items/i), "mug");

    expect(screen.getByText("Trail Mug")).toBeInTheDocument();
    expect(screen.queryByText("Atlas Jacket")).not.toBeInTheDocument();
    expect(screen.queryByText("Field Notebook")).not.toBeInTheDocument();
  });

  test("filters items by category", async () => {
    const user = userEvent.setup();

    render(<Exercise />);

    await user.selectOptions(screen.getByLabelText(/category/i), "clothing");

    expect(screen.getByText("Atlas Jacket")).toBeInTheDocument();
    expect(screen.queryByText("Trail Mug")).not.toBeInTheDocument();
    expect(screen.queryByText("Field Notebook")).not.toBeInTheDocument();
  });

  test("shows an empty state when no items match", async () => {
    const user = userEvent.setup();

    render(<Exercise />);

    await user.type(screen.getByLabelText(/search items/i), "zzzz");

    expect(screen.getByText(/no items match/i)).toBeInTheDocument();
  });
});
