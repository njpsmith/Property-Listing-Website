import { Property } from "../types/property";

export async function getProperties(): Promise<Property[]> {
  const response = await fetch(
    "https://databasesample.com/mock/property-listings/properties?_page=1&_limit=20",
  );

  if (!response.ok) {
    throw new Error("Failed to fetch properties");
  }

  const properties: Property[] = await response.json();

  return properties;
}
