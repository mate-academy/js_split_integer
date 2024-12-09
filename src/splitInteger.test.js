"use strict";

const splitInteger = require("./splitInteger");

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
  expect(splitInteger(6, 2)).toEqual([3, 3]);
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result1 = splitInteger(17, 4);

  expect(Math.max(...result1) - Math.min(...result1)).toBeLessThanOrEqual(1);

  const result2 = splitInteger(32, 6);

  expect(Math.max(...result2) - Math.min(...result2)).toBeLessThanOrEqual(1);
});

test(`should sort parts ascending if they are not equal`, () => {
  const result = splitInteger(29, 6);

  expect(result).toEqual(result.slice().sort((a, b) => a - b));
});

test(`should add zeros if value < numberOfParts`, () => {
  expect(splitInteger(0, 1)).toEqual([0]);
  expect(splitInteger(0, 2)).toEqual([0, 0]);
  expect(splitInteger(2, 4)).toEqual([0, 0, 1, 1]);
  expect(splitInteger(7, 10)).toEqual([0, 0, 0, 1, 1, 1, 1, 1, 1, 1]);
});
