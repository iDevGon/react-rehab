import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import Exercise from "./Exercise";

describe("crud-board mission", () => {
  test("adds a new card", async () => {
    const user = userEvent.setup();

    render(<Exercise />);

    await user.type(screen.getByLabelText(/^card title$/i), "Ship starter");
    await user.click(screen.getByRole("button", { name: /add card/i }));

    expect(screen.getByRole("button", { name: "Ship starter" })).toBeInTheDocument();
  });

  test("selects and edits a card", async () => {
    const user = userEvent.setup();

    render(<Exercise />);

    await user.click(screen.getByRole("button", { name: "Write mission tests" }));

    expect(screen.getByLabelText(/selected card title/i)).toHaveValue("Write mission tests");

    await user.clear(screen.getByLabelText(/selected card title/i));
    await user.type(screen.getByLabelText(/selected card title/i), "Write meaningful tests");
    await user.click(screen.getByRole("button", { name: /save changes/i }));

    expect(screen.getByRole("button", { name: "Write meaningful tests" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Write mission tests" })).not.toBeInTheDocument();
  });

  test("deletes the selected card", async () => {
    const user = userEvent.setup();

    render(<Exercise />);

    await user.click(screen.getByRole("button", { name: "Write mission tests" }));
    await user.click(screen.getByRole("button", { name: /delete selected/i }));

    expect(screen.queryByRole("button", { name: "Write mission tests" })).not.toBeInTheDocument();
    expect(screen.getByText(/no card selected/i)).toBeInTheDocument();
  });

  test("clears selection without deleting a card", async () => {
    const user = userEvent.setup();

    render(<Exercise />);

    await user.click(screen.getByRole("button", { name: "Review behavior" }));
    expect(screen.getByLabelText(/selected card title/i)).toHaveValue("Review behavior");

    await user.click(screen.getByRole("button", { name: /clear selection/i }));

    expect(screen.getByLabelText(/selected card title/i)).toHaveValue("");
    expect(screen.getByRole("button", { name: "Review behavior" })).toBeInTheDocument();
  });
});
