export type PropertyType =
  | "detached"
  | "semi-detached"
  | "terraced"
  | "flat"
  | "bungalow"
  | "townhouse";

export interface PropertyAddress {
  line1: string;
  line2: string | null;
  city: string;
  postcode: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

interface PropertyImage {
  id: string;
  url: string;
  alt: string;
  isPrimary: boolean;
  order: number;
}

export type ListingStatus = "available" | "under-offer" | "sold" | "withdrawn";

export interface PropertyListing {
  id: string;
  referenceNumber: string;
  title: string; // E.g. 'Stunning 3-bed in Crystal Palace
  price: number;
  address: PropertyAddress;
  coordinates?: Coordinates;
  bedrooms: number;
  bathrooms: number | null;
  squareMetres: number | null;
  propertyType: string;
  description: string;
  images: PropertyImage[];
  listingStatus: ListingStatus;
  listedAt: string; // Use ISO 8601 date strings for this. E.g. "2026-10-15T09:30:00.000Z"
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
