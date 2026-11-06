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
      <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black mb-6">
        Property name: {property.address}
      </h1>

      <div className="bg-zinc-100 p-6">
        <h3 className="text-lg leading-8">Property Details</h3>
        <p>
          {property.bathrooms}{" "}
          {property.bathrooms === 1 ? "bathroom" : "bathrooms"}
        </p>
        <p>
          {property.bedrooms} {property.bedrooms === 1 ? "bedroom" : "bedrooms"}
        </p>

        {/* <p>£{property.price.toLocaleString()}</p> */}

        <p>Property type: {capitalizeFirstLetter(property.property_type)}</p>

        <p>{property.square_feet} square feet.</p>
        <p>Price: £350,000</p>
      </div>

      <hr />
      <h3 className="text-lg leading-8">Property Description</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec
        efficitur risus, id vehicula neque. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Aenean
        commodo risus euismod nulla hendrerit fermentum. Phasellus in ante
        faucibus, finibus sapien condimentum, ornare massa. Vestibulum pretium
        nibh sit amet velit finibus, in rutrum lectus congue. Nunc id ultricies
        tortor. Aliquam sit amet aliquam tortor, et auctor lacus. Nullam
        consectetur, massa sed fringilla dignissim, sapien risus sodales libero,
        vitae tristique sapien sem ac est.
      </p>
      <p>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Etiam nec augue interdum, sagittis tortor ac,
        suscipit est. Mauris bibendum, ex et consequat aliquam, nunc sem
        volutpat nisl, in vestibulum metus leo ac nibh. Aenean gravida egestas
        ullamcorper. Cras tincidunt hendrerit accumsan.
      </p>
      <p>
        Curabitur semper nunc metus, sit amet luctus est scelerisque in.
        Phasellus luctus consectetur leo sed placerat. Donec et nisi massa.
        Aliquam vel neque nunc. Phasellus ac ex aliquam, pretium justo a,
        hendrerit est. Mauris ornare quis turpis in consequat. Cras nec dapibus
        nunc, in cursus lorem. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Nullam vulputate nulla
        tincidunt, porta augue non, molestie lorem. Donec suscipit consectetur
        suscipit. Aliquam iaculis sit amet ex ac egestas. Sed vulputate tempus
        elit, non faucibus nisi mollis eu.{" "}
      </p>
      <p>
        Donec eleifend lectus non velit posuere, vel interdum nulla eleifend.
        Donec tellus lectus, vulputate vitae ultricies a, lacinia facilisis
        elit. Cras consequat mi non condimentum dignissim. Mauris porttitor
        justo luctus eros interdum, eget commodo nunc egestas.
      </p>

      <hr />
      <p>
        <small>
          Disclaimer - Property reference RX804561. The information displayed
          about this property comprises a property advertisement.
          Rightmove.co.uk makes no warranty as to the accuracy or completeness
          of the advertisement or any linked or associated information, and
          Rightmove has no control over the content. This property advertisement
          does not constitute property particulars. The information is provided
          and maintained by Thomas James, Powered by Keller Williams, Covering
          North London. Please contact the selling agent or developer directly
          to obtain any information which may be available under the terms of
          The Energy Performance of Buildings (Certificates and Inspections)
          (England and Wales) Regulations 2007 or the Home Report if in relation
          to a residential property in Scotland.
        </small>
      </p>
    </main>
  );
}
