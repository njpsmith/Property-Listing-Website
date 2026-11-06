import { Property } from "../types/property.types";
import { PropertyCard } from "@/app/ui/components/PropertyCard/PropertyCard";
import { fetchProperties } from "../services/propertyService";

// interface PropertyListProps {
//   properties: Property[];
// }

// interface PropertyResultsProps {
//   searchParams: {
//     minPrice?: string;
//     maxPrice?: string;
//     bedrooms?: string;
//     bathrooms?: string;
//     property_type?: string;
//   };
// }

interface PropertiesPageProps {
  searchParams: Promise<{
    minPrice?: string;
    maxPrice?: string;
    bedrooms?: string;
    bathrooms?: string;
    property_type?: string;
  }>;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function PropertyList({
  params,
}: {
  params: PropertiesPageProps["searchParams"];
}) {
  // export async function PropertyList({ searchParams }: PropertyResultsProps) {
  const filters = await params;

  // await delay(1000); // Add a delay to test the Suspense state

  const properties = await fetchProperties({
    // minPrice: params.minPrice,
    // maxPrice: params.maxPrice,
    bedrooms: filters?.bedrooms,
    bathrooms: filters?.bathrooms,
    property_type: filters?.property_type,
  });

  // const properties = await fetchProperties();

  if (properties.length === 0) {
    return (
      <p>No properties match those filters. Try fewer bedrooms or bathrooms.</p>
    );
  }

  return (
    <>
      <div className="my-6">
        {properties.length}{" "}
        {properties.length === 1 ? "property" : "properties"} found
      </div>

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
