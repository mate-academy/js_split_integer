"use strict";

const splitInteger = require("./splitInteger");

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(8, 4)).toEqual([2, 2, 2, 2]);
  expect(splitInteger(9, 9)).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(72, 1)).toEqual([72]);
  expect(splitInteger(1598, 1)).toEqual([1598]);
});

test("should sort parts ascending if they are not equal", () => {
  expect(splitInteger(21, 4)).toEqual([5, 5, 5, 6]);
  expect(splitInteger(13, 2)).toEqual([6, 7]);
});

test("should add zeros if value < numberOfParts", () => {
  expect(splitInteger(2, 6)).toEqual([0, 0, 0, 0, 1, 1]);
  expect(splitInteger(10, 12)).toEqual([0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
});
