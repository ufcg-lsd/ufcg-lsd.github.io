import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { getRandomBrandColor } from "./utils"; // Adjust the import path

describe("getRandomBrandColor", () => {
  const validColors = ["#5474B7", "#7069AE", "#AD689E", "#DE5764", "#DD9356"];

  it("should return a string that is included in the predefined color list", () => {
    const color = getRandomBrandColor();
    expect(validColors).toContain(color);
  });

  it("should return the first color when Math.random is 0", () => {
    // Mock Math.random to return 0
    vi.spyOn(Math, "random").mockReturnValue(0);

    expect(getRandomBrandColor()).toBe("#52BEBD");

    vi.restoreAllMocks();
  });

  it("should return the last color when Math.random is close to 1", () => {
    // Mock Math.random to return 0.999...
    vi.spyOn(Math, "random").mockReturnValue(0.999);

    expect(getRandomBrandColor()).toBe("#DD9356");

    vi.restoreAllMocks();
  });

  it("should return different colors over multiple calls (statistical check)", () => {
    const results = new Set();
    for (let i = 0; i < 100; i++) {
      results.add(getRandomBrandColor());
    }
    // With 100 iterations, we should have hit more than one color
    expect(results.size).toBeGreaterThan(1);
  });
});
