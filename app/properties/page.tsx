// "use client";

import { Suspense } from "react";
// import { useEffect, useState } from "react";
import { ContentWrapper } from "../ui/layout/content-wrapper/content-wrapper";
import { PropertyList } from "../../features/properties/components/PropertyList";
// import { getProperties } from "../../features/properties/services/propertyService";

export default function Properties() {
  // const [properties, setProperties] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://databasesample.com/mock/property-listings/properties?_page=1&_limit=20",
  //   )
  //     .then((res) => res.json())
  //     // .then(console.log);
  //     .then(setProperties);
  // }, []);

  return (
    <ContentWrapper>
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black mb-4">
        Properties page
      </h1>

      <Suspense fallback={<div>Loading...</div>}>
        <PropertyList />
        {/* <PropertyList properties={properties} /> */}
      </Suspense>
    </ContentWrapper>
  );
}
