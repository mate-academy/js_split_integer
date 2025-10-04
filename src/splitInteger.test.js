"use strict";

const splitInteger = require("./splitInteger");

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
});

test("should sort parts ascending if they are not equal", () => {
  const result = splitInteger(6, 2);

  for (let i = 0; i < result.length - 1; i++) {
    expect(result[i + 1]).toBeGreaterThanOrEqual(result[i]);
  }
});

test("should add zeros if value < numberOfParts", () => {
  const result = splitInteger(5, 6);

  expect(result).toContain(0);
  expect(result).toHaveLength(6);
});
