import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import Exercise from "./Exercise";

function dateOffset(days: number) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

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

  test("shows validation errors for all required fields", async () => {
    const user = userEvent.setup();

    render(<Exercise />);

    await user.click(screen.getByRole("button", { name: /add contact/i }));
    await user.click(screen.getByRole("button", { name: /save contact/i }));

    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/role is required/i)).toBeInTheDocument();
    expect(screen.getByText(/start date is required/i)).toBeInTheDocument();
    expect(screen.getByText(/invitation consent is required/i)).toBeInTheDocument();
  });

  test("validates trimmed name length, email format, and past dates", async () => {
    const user = userEvent.setup();

    render(<Exercise />);

    await user.click(screen.getByRole("button", { name: /add contact/i }));
    await user.type(screen.getByLabelText(/^name$/i), " M ");
    await user.type(screen.getByLabelText(/^email$/i), "not-an-email");
    await user.type(screen.getByLabelText(/start date/i), dateOffset(-1));
    await user.click(screen.getByRole("button", { name: /save contact/i }));

    expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument();
    expect(screen.getByText(/enter a valid email address/i)).toBeInTheDocument();
    expect(screen.getByText(/start date cannot be in the past/i)).toBeInTheDocument();
  });

  test("clears a field error after that field becomes valid", async () => {
    const user = userEvent.setup();

    render(<Exercise />);

    await user.click(screen.getByRole("button", { name: /add contact/i }));
    await user.click(screen.getByRole("button", { name: /save contact/i }));
    await user.type(screen.getByLabelText(/^name$/i), "Mina Park");

    expect(screen.queryByText(/name is required/i)).not.toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
  });

  test("renders a submitted contact with role and start date", async () => {
    const user = userEvent.setup();
    const startDate = dateOffset(1);

    render(<Exercise />);

    await user.click(screen.getByRole("button", { name: /add contact/i }));
    await user.type(screen.getByLabelText(/^name$/i), "Mina Park");
    await user.type(screen.getByLabelText(/^email$/i), "mina@example.com");
    await user.selectOptions(screen.getByLabelText(/role/i), "Engineer");
    await user.type(screen.getByLabelText(/start date/i), startDate);
    await user.click(screen.getByRole("checkbox", { name: /send invitation email/i }));
    await user.click(screen.getByRole("button", { name: /save contact/i }));

    expect(screen.getByText("Mina Park")).toBeInTheDocument();
    expect(screen.getByText("mina@example.com")).toBeInTheDocument();
    expect(screen.getByText("Engineer")).toBeInTheDocument();
    expect(screen.getByText(startDate)).toBeInTheDocument();
    expect(screen.queryByRole("dialog", { name: /new contact/i })).not.toBeInTheDocument();
  });

  test("rejects duplicate emails after a contact has been saved", async () => {
    const user = userEvent.setup();
    const startDate = dateOffset(1);

    render(<Exercise />);

    await user.click(screen.getByRole("button", { name: /add contact/i }));
    await user.type(screen.getByLabelText(/^name$/i), "Mina Park");
    await user.type(screen.getByLabelText(/^email$/i), "mina@example.com");
    await user.selectOptions(screen.getByLabelText(/role/i), "Engineer");
    await user.type(screen.getByLabelText(/start date/i), startDate);
    await user.click(screen.getByRole("checkbox", { name: /send invitation email/i }));
    await user.click(screen.getByRole("button", { name: /save contact/i }));

    await user.click(screen.getByRole("button", { name: /add contact/i }));
    await user.type(screen.getByLabelText(/^name$/i), "Mina Again");
    await user.type(screen.getByLabelText(/^email$/i), "mina@example.com");
    await user.selectOptions(screen.getByLabelText(/role/i), "PM");
    await user.type(screen.getByLabelText(/start date/i), dateOffset(2));
    await user.click(screen.getByRole("checkbox", { name: /send invitation email/i }));
    await user.click(screen.getByRole("button", { name: /save contact/i }));

    expect(screen.getByText(/email already exists/i)).toBeInTheDocument();
    expect(screen.getByRole("dialog", { name: /new contact/i })).toBeInTheDocument();
  });
});
