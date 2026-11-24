import { PropertyCard } from "@/app/ui/components/PropertyCard/PropertyCard";
import { fetchProperties } from "../services/propertyService";
import { PropertiesPageProps } from "../types/property.types";
import propertiesJson from "../data/properties.json";
import { PropertyListing } from "../types/property.types";

const properties = propertiesJson as PropertyListing[];

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function PropertyList({
  params,
}: {
  params: PropertiesPageProps["searchParams"];
}) {
  console.log("🚀 ~ propertiesTest:", properties);

  // export async function PropertyList({ searchParams }: PropertyResultsProps) {
  const filters = await params;

  // await delay(1000); // Add a delay to test the Suspense state

  // const properties = await fetchProperties({
  //   // minPrice: params.minPrice,
  //   // maxPrice: params.maxPrice,
  //   bedrooms: filters?.bedrooms,
  //   bathrooms: filters?.bathrooms,
  //   property_type: filters?.property_type,
  // });

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

      {properties.map((property: PropertyListing) => {
        const {
          id,
          title,
          price,
          address,
          bedrooms,
          bathrooms,
          squareMetres,
          propertyType,
          referenceNumber,
          coordinates,
          description,
          images,
          listingStatus,
          listedAt,
        } = property;

        return (
          <PropertyCard
            key={id}
            referenceNumber={referenceNumber}
            id={id}
            title={title}
            price={price}
            address={address}
            bedrooms={bedrooms}
            bathrooms={bathrooms}
            squareMetres={squareMetres}
            propertyType={propertyType}
            coordinates={coordinates}
            description={description}
            images={images}
            listingStatus={listingStatus}
            listedAt={listedAt}
          />
        );
      })}
    </>
  );
}

export default PropertyList;
