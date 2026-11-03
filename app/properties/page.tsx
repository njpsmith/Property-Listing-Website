"use client";

import { useEffect, useState } from "react";
import { ContentWrapper } from "../ui/layout/content-wrapper/content-wrapper";
import { PropertyCard } from "../ui/components/property-card/property-card";

import { Property } from "../../features/properties/types/property";

export default function Properties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch(
      "https://databasesample.com/mock/property-listings/properties?_page=1&_limit=20",
    )
      .then((res) => res.json())
      // .then(console.log);
      .then(setProperties);
  }, []);

  return (
    <ContentWrapper>
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black mb-4">
        Properties page
      </h1>

      {/* <PropertiesList /> */}

      {properties.map((property: Property) => {
        return (
          <PropertyCard
            key={property.id}
            id={property.id}
            address={property.address}
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            square_feet={property.square_feet}
            property_type={property.property_type}
          />
        );
      })}
    </ContentWrapper>
  );
}
