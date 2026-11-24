import { PropertyImage } from "../features/properties/types/property.types";

export function capitalizeFirstLetter(val: string) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-GB");
}

export function formatStatus(status: string): string {
  return status.replace(/-/g, " ").replace(/^./, (char) => char.toUpperCase());
}

export function getPrimaryImage(images: PropertyImage[]): PropertyImage {
  return images.find((image) => image.isPrimary);
}
