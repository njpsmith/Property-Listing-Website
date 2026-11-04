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
  // await delay(1000); // Add a delay to test the Suspense state

  const properties = await getProperties({
    minPrice: searchParams.minPrice,
    maxPrice: searchParams.maxPrice,
    bedrooms: searchParams.bedrooms,
    bathrooms: searchParams.bathrooms,
  });

  // const properties = await getProperties();

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
