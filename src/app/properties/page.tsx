import { Suspense } from "react";
import { ContentWrapper } from "@/app/ui/layout/ContentWrapper/ContentWrapper";
import { PropertyList } from "@/features/properties/components/PropertyList";
import { PropertyCardSkeleton } from "@/app/ui/components/PropertyCard/PropertyCardSkeleton";
import { PropertySearchFilter } from "@/features/properties/components/PropertySearchFilter";

interface PropertiesPageProps {
  searchParams: Promise<{
    minPrice?: string;
    maxPrice?: string;
    bedrooms?: string;
    bathrooms?: string;
    property_type?: string;
  }>;
}

export default async function PropertiesPage({
  searchParams,
}: PropertiesPageProps) {
  const params = await searchParams;

  return (
    <ContentWrapper>
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black mb-6">
        Property Listings
      </h1>

      <Suspense fallback={<div>Loading search bar...</div>}>
        <PropertySearchFilter />
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
        <PropertyList searchParams={params} />
      </Suspense>
    </ContentWrapper>
  );
}
