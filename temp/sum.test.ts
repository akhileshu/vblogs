import { describe, it, expect } from "vitest";
import { sum } from "./sum";

describe("sum function", () => {
  it("should return the correct sum of two numbers", () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(-1, 1)).toBe(0);
    expect(sum(0, 0)).toBe(0);
  });
});

