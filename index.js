// Assume helpers.js contains a function sum
const { sum } = require("./helpers.js");

describe("Helpers Functions", () => {
  describe("sum function", () => {
    it("should add two numbers correctly", () => {
      // Test case 1: Adding positive numbers
      expect(sum(1, 2)).toBe(3); // Expect the result to be 3

      // Test case 2: Adding negative numbers
      expect(sum(-1, -2)).toBe(-3); // Expect the result to be -3

      // Test case 3: Adding a positive and a negative number
      expect(sum(5, -3)).toBe(2); // Expect the result to be 2
    });

    it("should handle edge cases", () => {
      // Test case 4: Adding zero and a number
      expect(sum(0, 7)).toBe(7); // Expect the result to be 7

      // Test case 5: Adding zero and negative number
      expect(sum(0, -5)).toBe(-5); // Expect the result to be -5
    });
  });
});
