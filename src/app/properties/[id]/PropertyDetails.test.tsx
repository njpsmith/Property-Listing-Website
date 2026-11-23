import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PropertyDetails from "./PropertyDetails";

describe("PropertyDetails", () => {
  it("renders the PropertyDetails component correctly", async () => {
    render(
      await PropertyDetails({
        params: Promise.resolve({ id: "1" }),
      }),
    );

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Property name: Marco Costa",
      }),
    ).toBeInTheDocument();

    expect(screen.getByText(/4 bathrooms/)).toBeInTheDocument();
    expect(screen.getByText(/1 bedroom/)).toBeInTheDocument();
    expect(screen.getByText(/4947 square metres/)).toBeInTheDocument();
    expect(screen.getByText(/Property Description/)).toBeInTheDocument();
  });
});
