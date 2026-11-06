import { getPropertyById } from "@/features/properties/services/propertyService";
import { notFound } from "next/navigation";
import { capitalizeFirstLetter } from "@/utils/utils";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function PropertyDetails({ params }: Props) {
  const { id } = await params;

  const property = await getPropertyById(id);

  if (!property) {
    notFound();
  }

  return (
    <main>
      <h1>Address: {property.address}</h1>

      <p>{property.bathrooms} bathrooms</p>
      <p>{property.bedrooms} bedrooms</p>

      {/* <p>£{property.price.toLocaleString()}</p> */}

      <p>{capitalizeFirstLetter(property.property_type)}</p>

      <p>{property.square_feet} square feet.</p>
    </main>
  );
}
