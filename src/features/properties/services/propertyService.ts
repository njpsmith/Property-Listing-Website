import { Property } from "../types/property.types";
import { API_URL } from "@/config/constants";

interface PropertyFilters {
  minPrice?: string;
  maxPrice?: string;
  bedrooms?: string;
  bathrooms?: string;
  property_type?: string;
}

export async function fetchProperties(
  filters: PropertyFilters,
): Promise<Property[]> {
  const params = new URLSearchParams();

  if (filters.minPrice !== undefined && filters.minPrice !== "") {
    params.set("minPrice", filters.minPrice);
  }

  if (filters.maxPrice !== undefined && filters.maxPrice !== "") {
    params.set("maxPrice", filters.maxPrice);
  }

  if (filters.bedrooms !== undefined && filters.bedrooms !== "") {
    params.set("bedrooms", filters.bedrooms);
  }

  if (filters.bathrooms !== undefined && filters.bathrooms !== "") {
    params.set("bathrooms", filters.bathrooms);
  }

  if (filters.property_type !== undefined && filters.property_type !== "") {
    params.set("property_type", filters.property_type);
  }

  const response = await fetch(
    `${API_URL}?${params.toString()}&_page=1&_limit=20`,
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

// export async function getPropertyById(id: string): Promise<Property> {
export async function getPropertyById(id: string) {
  const response = await fetch(`${API_URL}/${id}`);

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch property");
  }

  return response.json();

  // if (!response.ok) {
  //   throw new Error("Failed to fetch property");
  // }

  // return response.json();
}
