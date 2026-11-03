export interface Property {
  id: number;
  address: string;
  bedrooms: number | null;
  bathrooms: number | null;
  square_feet: number | null;
  property_type: "house" | "apartment" | "condo" | "townhouse";
}
