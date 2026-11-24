import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PropertyCard } from "./PropertyCard";
import type { PropertyListing } from "@/features/properties/types/property.types";

const propertyFixture: PropertyListing = {
  id: "1",
  referenceNumber: "FD100001",
  title: "Victorian family home with generous garden",
  price: 475000,
  address: {
    line1: "24 Willowbank Road",
    line2: null,
    city: "London",
    postcode: "SE19 2AB",
  },
  coordinates: {
    latitude: 51.4192,
    longitude: -0.0815,
  },
  bedrooms: 3,
  bathrooms: 2,
  squareMetres: 112,
  propertyType: "terraced",
  description:
    "A beautifully presented Victorian home combining period character with modern living.",
  images: [
    {
      id: "img-001-1",
      url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      alt: "Attractive modernised family home exterior",
      isPrimary: true,
      order: 1,
    },
  ],
  listingStatus: "available",
  listedAt: "2026-10-12T09:30:00Z",
};

describe("PropertyCard", () => {
  it("renders the property title", () => {
    render(<PropertyCard {...propertyFixture} />);

    expect(
      screen.getByRole("heading", {
        name: "Victorian family home with generous garden",
      }),
    ).toBeInTheDocument();
  });

  it("renders the property price", () => {
    render(<PropertyCard {...propertyFixture} />);

    expect(screen.getByText("£475,000")).toBeInTheDocument();
  });

  it("renders the number of bedrooms", () => {
    render(<PropertyCard {...propertyFixture} bedrooms={3} />);

    expect(screen.getAllByRole("heading", { level: 5 })[0]).toHaveTextContent(
      /3 bedrooms/,
    );
  });

  it("renders the number of bathrooms", () => {
    render(<PropertyCard {...propertyFixture} bathrooms={2} />);

    expect(screen.getAllByRole("heading", { level: 5 })[0]).toHaveTextContent(
      /2 bathrooms/,
    );
  });
});
