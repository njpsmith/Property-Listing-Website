import Image from "next/image";
import { Property } from "../../../../features/properties/types/property";

export const PropertyCard = ({
  id,
  address,
  bedrooms,
  bathrooms,
  square_feet,
  property_type,
}: Property) => {
  return (
    <div className="property-card border flex flex-col sm:flex-row mb-8 rounded-lg overflow-hidden">
      <div className="min-w-[260px] bg-slate-100">
        <Image
          src="/images/dummy-property.webp"
          width={476}
          height={317}
          alt="Property image"
          className="w-full"
        />
      </div>
      <div className="p-4">
        <h4 className="text-lg font-bold leading-8">{address}</h4>
        <h5 className="font-bold">
          {property_type} | {bedrooms} Bedroom{bedrooms && bedrooms > 1 && "s"}{" "}
          | {bathrooms} Bathroom{bathrooms && bathrooms > 1 && "s"}
        </h5>
        <p>
          This immaculate four bedroom property is uniquely private and
          spacious. Tucked away on a large plot in prestigious Quakers Walk,
          it’s secluded yet within easy walking distance of the many amenities
          in the Winchmore Hill area including several stations.
        </p>
        <p>Square feet: {square_feet}</p>

        {/* <h4 className="text-lg font-bold leading-8">Burnham Close, Enfield</h4>
        <h5 className="font-bold">Semi-Detached | 4 Bedrooms | 2 Bathrooms</h5>
        <p>
          This immaculate four bedroom property is uniquely private and
          spacious. Tucked away on a large plot in prestigious Quakers Walk,
          it’s secluded yet within easy walking distance of the many amenities
          in the Winchmore Hill area including several stations.
        </p> */}
      </div>
    </div>
  );
};

export default PropertyCard;
