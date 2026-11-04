import { Property } from "../types/property.types";
import { PropertyCard } from "@/app/ui/components/PropertyCard/PropertyCard";
import { getProperties } from "../services/propertyService";

// interface PropertyListProps {
//   properties: Property[];
// }

interface PropertyResultsProps {
  searchParams: {
    minPrice?: string;
    maxPrice?: string;
    bedrooms?: string;
    bathrooms?: string;
  };
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function PropertyList({ searchParams }: PropertyResultsProps) {
  const params = await searchParams;

  // await delay(1000); // Add a delay to test the Suspense state

  const properties = await getProperties({
    minPrice: params.minPrice,
    maxPrice: params.maxPrice,
    bedrooms: params.bedrooms,
    bathrooms: params.bathrooms,
  });

  // const properties = await getProperties();

  if (properties.length === 0) {
    return (
      // <p className={styles.status}>
      <p>No properties match those filters. Try fewer bedrooms or bathrooms.</p>
    );
  }

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
