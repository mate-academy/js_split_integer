"use strict";

const splitInteger = require("./splitInteger");

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {});

test("should sort parts ascending if they are not equal", () => {});

test("should add zeros if value < numberOfParts", () => {});

describe("splitInteger", () => {
  test("returns the value itself when numberOfParts = 1", () => {
    expect(splitInteger(8, 1)).toEqual([8]);
    expect(splitInteger(123, 1)).toEqual([123]);
  });

  test("splits evenly when divisible", () => {
    expect(splitInteger(6, 2)).toEqual([3, 3]);
    expect(splitInteger(20, 4)).toEqual([5, 5, 5, 5]);
    expect(splitInteger(9, 3)).toEqual([3, 3, 3]);
  });

  test("distributes remainder correctly", () => {
    expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
    expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
    expect(splitInteger(10, 3)).toEqual([3, 3, 4]);
  });

  test("handles case when numberOfParts equals value", () => {
    expect(splitInteger(5, 5)).toEqual([1, 1, 1, 1, 1]);
  });

  test("handles large values", () => {
    const result = splitInteger(1_000_000, 10);

    expect(result.length).toBe(10);
    expect(result.reduce((a, b) => a + b, 0)).toBe(1_000_000);
    expect(Math.max(...result) - Math.min(...result)).toBeLessThanOrEqual(1);
  });

  test("always returns a sorted ascending array", () => {
    const cases = [
      [17, 4],
      [32, 6],
      [10, 3],
      [8, 1],
      [9, 3],
    ];

    cases.forEach(([value, parts]) => {
      const result = splitInteger(value, parts);
      const sorted = [...result].sort((a, b) => a - b);

      expect(result).toEqual(sorted);
    });
  });

  test("sum of parts always equals the value", () => {
    const cases = [
      [17, 4],
      [32, 6],
      [10, 3],
      [8, 1],
      [9, 3],
      [5, 5],
    ];

    cases.forEach(([value, parts]) => {
      const result = splitInteger(value, parts);

      expect(result.reduce((a, b) => a + b, 0)).toBe(value);
    });
  });
});
