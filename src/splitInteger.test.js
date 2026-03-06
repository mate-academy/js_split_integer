"use strict";

const { splitInteger } = require("./splitInteger");

describe("splitInteger", () => {
  test("should return one element if numberOfParts = 1", () => {
    expect(splitInteger(8, 1)).toEqual([8]);
  });

  test("should split value into equal parts", () => {
    expect(splitInteger(6, 2)).toEqual([3, 3]);
  });

  test("should split value where difference between numbers is <= 1", () => {
    expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  });

  test("should correctly distribute remainder", () => {
    expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  });

  test("array should contain exactly numberOfParts elements", () => {
    const result = splitInteger(10, 3);

    expect(result.length).toBe(3);
  });

  test("difference between max and min should be <= 1", () => {
    const result = splitInteger(17, 4);
    const min = Math.min(...result);
    const max = Math.max(...result);

    expect(max - min).toBeLessThanOrEqual(1);
  });

  test("array should be sorted ascending", () => {
    const result = splitInteger(32, 6);
    const sorted = [...result].sort((a, b) => a - b);

    expect(result).toEqual(sorted);
  });
});
