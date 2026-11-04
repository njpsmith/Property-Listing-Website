import { PropertyType } from "../properties/types/property.types";

export interface PropertySearchFilters {
  // listingType?: ListingType;

  location?: string;

  minPrice?: number;
  maxPrice?: number;

  minBedrooms?: number;
  maxBedrooms?: number;

  propertyTypes?: PropertyType[];

  minBathrooms?: number;

  keywords?: string;

  sortBy?: PropertySortOption;
}

export type PropertySortOption =
  | "newest"
  | "oldest"
  | "price-ascending"
  | "price-descending";

export interface SavedProperty {
  id: string;
  userId: string;
  propertyId: string;
  createdAt: string;
}

// export interface SavedSearch {
//   id: string;
//   userId: string;

//   name: string;

//   filters: PropertySearchFilters;

//   createdAt: string;
//   updatedAt: string;
// }
