import Image from "next/image";
import Link from "next/link";
import { PropertyListing } from "@/features/properties/types/property.types";
import {
  capitalizeFirstLetter,
  formatDate,
  formatStatus,
  getPrimaryImage,
  formatPrice,
} from "@/utils/utils";

export const PropertyCard = ({
  id,
  title,
  bedrooms,
  bathrooms,
  price,
  squareMetres,
  propertyType,
  description,
  images,
  listedAt,
  listingStatus,
}: PropertyListing) => {
  const primaryImage = getPrimaryImage(images);

  return (
    <Link href={`/properties/${id}`}>
      <div className="property-card border flex flex-col sm:flex-row mb-8 rounded-lg overflow-hidden">
        <div className="min-w-[260px] bg-slate-100">
          <Image
            // src="/images/dummy-property.webp"
            src={primaryImage.url}
            width={1350}
            height={918}
            alt={primaryImage.alt}
            className="w-full"
          />
        </div>
        <div className="p-4">
          <h4 className="text-lg font-bold mb-2">{title}</h4>
          <h5 className="font-bold mb-2">
            {capitalizeFirstLetter(propertyType)}
            {bedrooms && ` | ${bedrooms} bedroom${bedrooms > 1 ? "s" : ""}`}
            {bathrooms && ` | ${bathrooms} bathroom${bathrooms > 1 ? "s" : ""}`}
          </h5>
          <h5 className="font-bold">{formatPrice(price)}</h5>

          <p>{description}</p>
          <p>{squareMetres} square metres</p>
          <p>
            Listed: {formatDate(listedAt)} | {formatStatus(listingStatus)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
