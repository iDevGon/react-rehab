import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import Exercise from "./Exercise";

describe("api-error-handling mission", () => {
  test("shows a loading state while fetching", async () => {
    const user = userEvent.setup();

    render(<Exercise />);

    await user.click(screen.getByRole("button", { name: /load profile/i }));

    expect(screen.getByRole("status")).toHaveTextContent(/loading profile/i);
  });

  test("renders data after a successful request", async () => {
    const user = userEvent.setup();

    render(<Exercise />);

    await user.click(screen.getByRole("button", { name: /load profile/i }));

    expect(await screen.findByText("Ada Lovelace", undefined, { timeout: 300 })).toBeInTheDocument();
    expect(screen.getByText("ada@example.com")).toBeInTheDocument();
  });

  test("shows an error and retries successfully", async () => {
    const user = userEvent.setup();

    render(<Exercise />);

    await user.click(screen.getByRole("checkbox", { name: /make next request fail/i }));
    await user.click(screen.getByRole("button", { name: /load profile/i }));

    expect(await screen.findByRole("alert", undefined, { timeout: 300 })).toHaveTextContent(
      /could not load profile/i
    );

    await user.click(screen.getByRole("checkbox", { name: /make next request fail/i }));
    await user.click(screen.getByRole("button", { name: /retry/i }));

    expect(await screen.findByText("Ada Lovelace", undefined, { timeout: 300 })).toBeInTheDocument();
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  test("clears an old error before starting another request", async () => {
    const user = userEvent.setup();

    render(<Exercise />);

    await user.click(screen.getByRole("checkbox", { name: /make next request fail/i }));
    await user.click(screen.getByRole("button", { name: /load profile/i }));
    expect(await screen.findByRole("alert", undefined, { timeout: 300 })).toBeInTheDocument();

    await user.click(screen.getByRole("checkbox", { name: /make next request fail/i }));
    await user.click(screen.getByRole("button", { name: /retry/i }));

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent(/loading profile/i);
  });
});
