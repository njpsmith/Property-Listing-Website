"use client";

import { useSearchParams } from "next/navigation";
// import { Select } from "@/app/ui/components/Select/Select";
import { PropertyType } from "../types/property.types";
import { capitalizeFirstLetter } from "@/utils/utils";

interface PropertySearchFilterProps {
  minPrice?: string;
  maxPrice?: string;
  bedrooms?: string;
  bathrooms?: string;
  property_type?: string;
}

// export function PropertySearchFilter(
//   {
//   // minPrice = "",
//   // maxPrice = "",
//   // bedrooms = "",
//   // bathrooms = "",
// }: PropertySearchFilterProps) {

export function PropertySearchFilter() {
  const searchParams = useSearchParams();

  const minPrice = searchParams.get("minPrice") ?? "";
  const maxPrice = searchParams.get("maxPrice") ?? "";
  const bedrooms = searchParams.get("bedrooms") ?? "";
  const bathrooms = searchParams.get("bathrooms") ?? "";
  const property_type = searchParams.get("property_type") ?? "";

  const propertyTypes: PropertyType[] = [
    "house",
    "apartment",
    "condo",
    "townhouse",
  ];

  return (
    <form
      action="/properties"
      method="GET"
      className="property-search-bar filter"
    >
      {/* <div>
        <label htmlFor="minPrice">Minimum price</label>
        <input
          id="minPrice"
          name="minPrice"
          type="number"
          defaultValue={minPrice}
        />
      </div>

      <div>
        <label htmlFor="maxPrice">Maximum price</label>
        <input
          id="maxPrice"
          name="maxPrice"
          type="number"
          defaultValue={maxPrice}
        />
      </div> */}

      {/* <Select
        label="Bedrooms"
        fieldName="bedrooms"
        optionValues={["", "1", "2", "3", "4", "5"]}
        optionLabels={["Any", "1", "2", "3", "4", "5"]}
      /> */}

      <div className="field">
        <label htmlFor="bedrooms">Bedrooms</label>
        <select id="bedrooms" name="bedrooms" defaultValue={bedrooms}>
          <option value="">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="bathrooms">Bathrooms</label>
        <select id="bathrooms" name="bathrooms" defaultValue={bathrooms}>
          <option value="">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="property_type">Type of Property</label>
        <select
          id="property_type"
          name="property_type"
          defaultValue={property_type}
        >
          <option value="">Any</option>
          {propertyTypes.map((type, index) => (
            <option key={index} value={type}>
              {capitalizeFirstLetter(type)}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-button-wrapper">
        <button
          type="submit"
          className="button button--blue font-bold py-2 px-4 rounded"
        >
          Search properties
        </button>
      </div>
    </form>
  );
}
