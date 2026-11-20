export type PropertyType = "house" | "apartment" | "condo" | "townhouse";
// | "detached"
// | "semi-detached"
// | "terraced"
// | "flat"
// | "bungalow"
// | "cottage";

export interface Property {
  id: number;
  address: string;
  bedrooms: number | null;
  bathrooms: number | null;
  square_feet: number | null;
  property_type: PropertyType;
  // title: string;
  // price: number;
}

export interface PropertiesPageProps {
  searchParams: Promise<{
    minPrice?: string;
    maxPrice?: string;
    bedrooms?: string;
    bathrooms?: string;
    property_type?: string;
  }>;
}
