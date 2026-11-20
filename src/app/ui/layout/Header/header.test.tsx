import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders the logo correctly", () => {
    render(<Header />);

    expect(
      screen.getByRole("img", { name: "Frontdoor Logo" }),
    ).toBeInTheDocument();
  });
});
