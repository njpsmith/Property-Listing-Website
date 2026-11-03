import { Property } from "../types/property";
import { PropertyCard } from "../../../app/ui/components/PropertyCard/PropertyCard";
import { getProperties } from "../services/propertyService";

// interface PropertyListProps {
//   properties: Property[];
// }

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function PropertyList() {
  await delay(1000); // Add a delay to test the Suspense state

  const properties = await getProperties();

  return (
    <>
      {properties.map((property: Property) => {
        const { id, address, bedrooms, bathrooms, square_feet, property_type } =
          property;

        return (
          <PropertyCard
            key={id}
            id={id}
            address={address}
            bedrooms={bedrooms}
            bathrooms={bathrooms}
            square_feet={square_feet}
            property_type={property_type}
          />
        );
      })}
    </>
  );
}

export default PropertyList;
