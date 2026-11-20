import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Homepage", () => {
  it("renders the homepage correctly", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Frontdoor - Find Your Next Home",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/This is a demo property listing website/),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: "Search for Properties",
      }),
    ).toHaveAttribute("href", "/properties");
  });
});
