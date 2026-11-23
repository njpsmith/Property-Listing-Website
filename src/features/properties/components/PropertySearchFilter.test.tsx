/*
There are four things to cover with these tests:
  1. The filter form renders correctly.
  2. Existing URL parameters populate the filter fields.
  3. Changing filter values produces the expected query parameters when the form is submitted.
  4. Empty/default filter values are handled correctly.
*/

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PropertySearchFilter } from "./PropertySearchFilter";
import { PropertiesPageProps } from "../types/property.types";

type SearchFilters = Awaited<PropertiesPageProps["searchParams"]>;

// Helper to render the async component
const renderFilter = async (params: SearchFilters = {}) => {
  const component = await PropertySearchFilter({
    params: Promise.resolve(params),
  });

  return render(component);
};

// Helper to get the query string the browser would submit
const getQueryString = (form: HTMLFormElement) => {
  const formData = new FormData(form);
  const searchParams = new URLSearchParams();

  formData.forEach((value, key) => {
    searchParams.append(key, String(value));
  });

  return searchParams.toString();
};

describe("PropertySearchFilter", () => {
  it("renders the search filter correctly", async () => {
    await renderFilter();

    expect(screen.getByLabelText("Bedrooms")).toBeInTheDocument();
    expect(screen.getByLabelText("Bathrooms")).toBeInTheDocument();
    expect(screen.getByLabelText("Type of Property")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Search properties" }),
    ).toBeInTheDocument();
  });

  it("renders the form with the correct action and method", async () => {
    await renderFilter();

    const form = document.querySelector("form");

    expect(form).toHaveAttribute("action", "/properties");
    expect(form).toHaveAttribute("method", "GET");
  });

  it("populates the filters with existing search parameters", async () => {
    await renderFilter({
      bedrooms: "3",
      bathrooms: "2",
      property_type: "house",
    });

    expect(screen.getByLabelText("Bedrooms")).toHaveValue("3");
    expect(screen.getByLabelText("Bathrooms")).toHaveValue("2");
    expect(screen.getByLabelText("Type of Property")).toHaveValue("house");
  });

  it("allows users to update the filter values", async () => {
    const user = userEvent.setup();

    await renderFilter();

    await user.selectOptions(screen.getByLabelText("Bedrooms"), "3");

    await user.selectOptions(screen.getByLabelText("Bathrooms"), "2");

    await user.selectOptions(
      screen.getByLabelText("Type of Property"),
      "house",
    );

    expect(screen.getByLabelText("Bedrooms")).toHaveValue("3");
    expect(screen.getByLabelText("Bathrooms")).toHaveValue("2");
    expect(screen.getByLabelText("Type of Property")).toHaveValue("house");
  });

  it("constructs the correct query parameters from the selected filters", async () => {
    const user = userEvent.setup();

    await renderFilter();

    await user.selectOptions(screen.getByLabelText("Bedrooms"), "3");

    await user.selectOptions(screen.getByLabelText("Bathrooms"), "2");

    await user.selectOptions(
      screen.getByLabelText("Type of Property"),
      "house",
    );

    const form = document.querySelector("form")!;

    const queryString = getQueryString(form);

    expect(queryString).toBe("bedrooms=3&bathrooms=2&property_type=house");
  });

  it("constructs query parameters using updated values rather than default values", async () => {
    const user = userEvent.setup();

    await renderFilter({
      bedrooms: "2",
      bathrooms: "1",
      property_type: "apartment",
    });

    await user.selectOptions(screen.getByLabelText("Bedrooms"), "4");

    await user.selectOptions(screen.getByLabelText("Bathrooms"), "3");

    await user.selectOptions(
      screen.getByLabelText("Type of Property"),
      "townhouse",
    );

    const form = document.querySelector("form")!;

    expect(getQueryString(form)).toBe(
      "bedrooms=4&bathrooms=3&property_type=townhouse",
    );
  });

  it("includes empty values in the query parameters", async () => {
    await renderFilter();

    const form = document.querySelector("form")!;

    expect(getQueryString(form)).toBe("bedrooms=&bathrooms=&property_type=");
  });

  it("renders all available property types", async () => {
    await renderFilter();

    const propertyTypeSelect = screen.getByLabelText("Type of Property");

    expect(propertyTypeSelect).toHaveDisplayValue("Any");

    expect(screen.getByRole("option", { name: "House" })).toBeInTheDocument();

    expect(
      screen.getByRole("option", { name: "Apartment" }),
    ).toBeInTheDocument();

    expect(screen.getByRole("option", { name: "Condo" })).toBeInTheDocument();

    expect(
      screen.getByRole("option", { name: "Townhouse" }),
    ).toBeInTheDocument();
  });
});
