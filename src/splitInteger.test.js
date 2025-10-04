"use strict";

const splitInteger = require("./splitInteger");

function assertSplitProperties(value, numberOfParts) {
  const result = splitInteger(value, numberOfParts);

  expect(result).toHaveLength(numberOfParts);

  expect(result.reduce((acc, val) => acc + val, 0)).toBe(value);

  result.forEach((el) => expect(Number.isInteger(el)).toBe(true));

  for (let i = 0; i < result.length - 1; i++) {
    expect(result[i + 1]).toBeGreaterThanOrEqual(result[i]);
  }

  const min = Math.min(...result);
  const max = Math.max(...result);

  expect(max - min).toBeLessThanOrEqual(1);

  return result;
}

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(assertSplitProperties(6, 2)).toEqual([3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(assertSplitProperties(8, 1)).toEqual([8]);
});

test("should sort parts ascending if they are not equal", () => {
  const result = assertSplitProperties(17, 4);

  expect(result).toEqual([4, 4, 4, 5]);
});

test("should add zeros if value < numberOfParts", () => {
  const result = assertSplitProperties(5, 6);

  expect(result).toContain(0);
});

test("should handle example splitInteger(32, 6)", () => {
  const result = assertSplitProperties(32, 6);

  expect(result).toEqual([5, 5, 5, 5, 6, 6]);
});
