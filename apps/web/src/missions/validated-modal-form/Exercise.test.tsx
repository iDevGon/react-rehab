import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import Exercise from "./Exercise";

describe("validated-modal-form mission", () => {
  test("opens the contact form modal", async () => {
    const user = userEvent.setup();

    render(<Exercise />);

    await user.click(screen.getByRole("button", { name: /add contact/i }));

    expect(screen.getByRole("dialog", { name: /new contact/i })).toBeInTheDocument();
  });

  test("closes the modal with Escape", async () => {
    const user = userEvent.setup();

    render(<Exercise />);

    await user.click(screen.getByRole("button", { name: /add contact/i }));
    await user.keyboard("{Escape}");

    expect(screen.queryByRole("dialog", { name: /new contact/i })).not.toBeInTheDocument();
  });

  test("shows validation errors for required fields", async () => {
    const user = userEvent.setup();

    render(<Exercise />);

    await user.click(screen.getByRole("button", { name: /add contact/i }));
    await user.click(screen.getByRole("button", { name: /save contact/i }));

    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
  });

  test("renders a submitted contact", async () => {
    const user = userEvent.setup();

    render(<Exercise />);

    await user.click(screen.getByRole("button", { name: /add contact/i }));
    await user.type(screen.getByLabelText(/^name$/i), "Mina Park");
    await user.type(screen.getByLabelText(/^email$/i), "mina@example.com");
    await user.click(screen.getByRole("button", { name: /save contact/i }));

    expect(screen.getByText("Mina Park")).toBeInTheDocument();
    expect(screen.getByText("mina@example.com")).toBeInTheDocument();
    expect(screen.queryByRole("dialog", { name: /new contact/i })).not.toBeInTheDocument();
  });
});
