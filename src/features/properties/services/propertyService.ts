import { Property } from "../types/property.types";

interface PropertyFilters {
  minPrice?: string;
  maxPrice?: string;
  bedrooms?: string;
  bathrooms?: string;
}

export async function getProperties(
  filters: PropertyFilters,
): Promise<Property[]> {
  const params = new URLSearchParams();

  if (filters.minPrice) {
    params.set("minPrice", filters.minPrice);
  }

  if (filters.maxPrice) {
    params.set("maxPrice", filters.maxPrice);
  }

  if (filters.bedrooms) {
    params.set("bedrooms", filters.bedrooms);
  }

  if (filters.bathrooms) {
    params.set("bathrooms", filters.bathrooms);
  }

  const response = await fetch(
    // `https://databasesample.com/mock/property-listings/properties?_page=1&_limit=20`,
    `https://databasesample.com/mock/property-listings/properties?${params.toString()}&_page=1&_limit=20`,
    {
      next: {
        revalidate: 300, //revalidated after 300 seconds (five minutes).
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch properties");
  }

  const properties: Property[] = await response.json();

  return properties;
}
