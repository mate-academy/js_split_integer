"use strict";

const splitInteger = require("./splitInteger");

test("should split a number into equal parts if a value is divisible by a numberOfParts", () => {
  expect(splitInteger(8, 4)).toEqual([2, 2, 2, 2]);
  expect(splitInteger(5, 5)).toEqual([1, 1, 1, 1, 1]);
});

test("should return a part equals to a value when splitting into 1 part", () => {
  expect(splitInteger(5, 1)).toEqual([5]);
});

test("should sort parts ascending if they are not equal", () => {
  expect(splitInteger(10, 3)).toEqual([3, 3, 4]);
  expect(splitInteger(7, 2)).toEqual([3, 4]);
});

test("should add zeros if value < numberOfParts", () => {
  expect(splitInteger(0, 4)).toEqual([0, 0, 0, 0]);
});
