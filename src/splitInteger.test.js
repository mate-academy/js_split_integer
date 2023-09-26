"use strict";

const splitInteger = require("./splitInteger");

test(`should split a number into equal parts if a value is divisible by numberOfParts`, () => {
  expect(splitInteger(8, 4)).toEqual([2, 2, 2, 2]);
  expect(splitInteger(12, 3)).toEqual([4, 4, 4]);
});

test(`should return a part equal to the value when splitting into 1 part`, () => {
  expect(splitInteger(6, 1)).toEqual([6]);
  expect(splitInteger(17, 1)).toEqual([17]);
});

test("should sort parts ascending if they are not equal", () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});

test("should add zeros if value < numberOfParts", () => {
  expect(splitInteger(3, 5)).toEqual([0, 0, 1, 1, 1]);
  expect(splitInteger(7, 10)).toEqual([0, 0, 0, 0, 0, 0, 1, 1, 1, 1]);
});
