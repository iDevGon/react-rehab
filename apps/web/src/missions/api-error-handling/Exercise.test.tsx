import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, test, vi } from "vitest";
import Exercise from "./Exercise";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("api-error-handling mission", () => {
  test("shows a loading state while fetching", async () => {
    const user = userEvent.setup();

    render(<Exercise />);

    await user.click(screen.getByRole("button", { name: /load profile/i }));

    expect(screen.getByRole("status")).toHaveTextContent(/loading profile/i);
  });

  test("requests the profile API endpoint", async () => {
    const user = userEvent.setup();
    const fetchSpy = vi.spyOn(window, "fetch");

    render(<Exercise />);

    await user.click(screen.getByRole("button", { name: /load profile/i }));

    expect(fetchSpy).toHaveBeenCalledWith("/api/profile");
  });

  test("renders data after a successful request", async () => {
    const user = userEvent.setup();

    render(<Exercise />);

    await user.click(screen.getByRole("button", { name: /load profile/i }));

    expect(await screen.findByText("Ada Lovelace", undefined, { timeout: 300 })).toBeInTheDocument();
    expect(screen.getByText("ada@example.com")).toBeInTheDocument();
    expect(screen.getByText("analytical-engine")).toBeInTheDocument();
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
