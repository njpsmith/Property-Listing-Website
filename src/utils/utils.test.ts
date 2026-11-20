import { describe, it, expect } from "vitest";
import { formatPrice } from "./utils";

describe("formatPrice", () => {
  it("formats a property price correctly", () => {
    expect(formatPrice(250000)).toBe("£250,000");
  });

  it("formats a million pound property correctly", () => {
    expect(formatPrice(1000000)).toBe("£1,000,000");
  });

  it("formats zero correctly", () => {
    expect(formatPrice(0)).toBe("£0");
  });
});
