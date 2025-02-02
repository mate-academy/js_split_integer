"use strict";

const splitInteger = require("./splitInteger");

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(6, 2);

  expect(Math.min(...result)).toBe(Math.max(...result));
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(8, 1);

  expect(result[0]).toBe(8);
});

test("should sort parts ascending if they are not equal", () => {
  const result = splitInteger(32, 6);

  const sorted = result.sort((num1, num2) => {
    return num1 - num2;
  });

  expect(result).toBe(sorted);
});

test("should add zeros if value < numberOfParts", () => {
  const result = splitInteger(2, 4);
  const expected = [0, 0, 1, 1];

  expect(result).toEqual(expected);
});

// eslint-disable-next-line no-shadow
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(
          `actual is not equal expected ${actual} !== ${expected}`
        );
      }
    },
  };
}
