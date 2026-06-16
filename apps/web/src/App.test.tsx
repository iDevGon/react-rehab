import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import App from "./App";

describe("App locale switching", () => {
  test("shows English by default and switches mission text to Korean", async () => {
    const user = userEvent.setup();

    render(<App />);

    expect(
      screen.getByRole("heading", { name: "Mission Runner" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Filterable List" })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Korean/i })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /Korean/i }));

    expect(
      screen.getByRole("heading", { name: "미션 러너" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "필터 가능한 목록" })
    ).toBeInTheDocument();
    expect(screen.getByText("요구사항")).toBeInTheDocument();
  });
});
