import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PropertyCard } from "./PropertyCard";

// export interface Property {
//   id: number;
//   address: string;
//   bedrooms: number | null;
//   bathrooms: number | null;
//   square_feet: number | null;
//   property_type: PropertyType;
// }

// export type PropertyType = "house" | "apartment" | "condo" | "townhouse";

describe("PropertyCard", () => {
  it("renders the property title", () => {
    render(
      <PropertyCard
        id={1}
        address="Beautiful family home"
        // price={450000}
        bedrooms={3}
        bathrooms={2}
        square_feet={1600}
        property_type={"house"}
      />,
    );

    expect(
      screen.getByRole("heading", {
        name: "Beautiful family home",
      }),
    ).toBeInTheDocument();
  });

  // it("renders the property price", () => {
  //   render(
  //     <PropertyCard
  //       id={1}
  //       address="Beautiful family home"
  //       bedrooms={3}
  //       bathrooms={2}
  //       square_feet={2600}
  //       property_type={"apartment"}
  //     />,
  //   );

  //   expect(screen.getByText("£450,000")).toBeInTheDocument();
  // });

  it("renders the number of bedrooms", () => {
    render(
      <PropertyCard
        id={7}
        address="Beautiful family home"
        bedrooms={3}
        bathrooms={2}
        square_feet={2600}
        property_type={"apartment"}
      />,
    );

    expect(screen.getAllByRole("heading", { level: 5 })[0]).toHaveTextContent(
      /3 bedrooms/,
    );
  });

  it("renders the number of bathrooms", () => {
    render(
      <PropertyCard
        id={7}
        address="Beautiful family home"
        bedrooms={3}
        bathrooms={2}
        square_feet={2600}
        property_type={"apartment"}
      />,
    );

    expect(screen.getAllByRole("heading", { level: 5 })[0]).toHaveTextContent(
      /2 bathrooms/,
    );
  });
});
