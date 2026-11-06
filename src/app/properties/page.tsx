import { Suspense } from "react";
import { ContentWrapper } from "@/app/ui/layout/ContentWrapper/ContentWrapper";
import { PropertyList } from "@/features/properties/components/PropertyList";
import { PropertyCardSkeleton } from "@/app/ui/components/PropertyCard/PropertyCardSkeleton";
import { PropertySearchFilter } from "@/features/properties/components/PropertySearchFilter";
import { PropertiesPageProps } from "@/features/properties/types/property.types";

export default async function PropertiesPage(props: PropertiesPageProps) {
  return (
    <ContentWrapper>
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black mb-6">
        Property Listings
      </h1>

      <Suspense fallback={<div>Loading search bar...</div>}>
        <PropertySearchFilter params={props.searchParams} />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex flex-col gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <PropertyCardSkeleton key={index} />
            ))}
          </div>
        }
      >
        <PropertyList params={props.searchParams} />
      </Suspense>
    </ContentWrapper>
  );
}
