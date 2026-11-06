import { PropertyType, PropertiesPageProps } from "../types/property.types";
import { capitalizeFirstLetter } from "@/utils/utils";

export async function PropertySearchFilter({
  params,
}: {
  params: PropertiesPageProps["searchParams"];
}) {
  const filters = await params;

  // const bedrooms = filters.get("bedrooms") ?? "";
  // const bathrooms = filters.get("bathrooms") ?? "";
  // const property_type = filters.get("property_type") ?? "";

  const bedrooms = filters.bedrooms ?? "";
  const bathrooms = filters.bathrooms ?? "";
  const property_type = filters.property_type ?? "";

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
      className="property-search-bar filter bg-[var(--twilight)] text-white p-4 rounded-lg"
    >
      <div className="block sm:flex gap-8 mb-8 sm:mb-6">
        <div className="field mb-6 sm:mb-0">
          <label htmlFor="bedrooms">Bedrooms</label>
          <select id="bedrooms" name="bedrooms" defaultValue={bedrooms}>
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>

        <div className="field mb-6 sm:mb-0">
          <label htmlFor="bathrooms">Bathrooms</label>
          <select id="bathrooms" name="bathrooms" defaultValue={bathrooms}>
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>

        <div className="field mb-6 sm:mb-0">
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
      </div>

      <div className="filter-button-wrapper">
        <button
          type="submit"
          className="button button--blue font-bold py-2 px-4 rounded w-full"
        >
          Search properties
        </button>
      </div>
    </form>
  );
}
