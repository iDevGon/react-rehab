import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import Exercise from "./Exercise";

describe("performance-pass mission", () => {
  test("filters the visible project list", async () => {
    const user = userEvent.setup();

    render(<Exercise />);

    await user.type(screen.getByLabelText(/filter projects/i), "deck");

    expect(screen.getByText("Deck Builder")).toBeInTheDocument();
    expect(screen.queryByText("Route Planner")).not.toBeInTheDocument();
  });

  test("does not repeat expensive filtering for unrelated UI state", async () => {
    const user = userEvent.setup();

    render(<Exercise />);

    const initialRuns = screen.getByLabelText(/calculation runs/i).textContent;

    await user.click(screen.getByRole("button", { name: /toggle density/i }));

    expect(screen.getByLabelText(/calculation runs/i)).toHaveTextContent(initialRuns ?? "");
  });
});
