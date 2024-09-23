/* eslint-disable quotes */
"use strict";

const splitInteger = require("./splitInteger");

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(12, 6);

  expect(result).toEqual([2, 2, 2, 2, 2, 2]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(12, 1);

  expect(result).toEqual([12]);
});

test("should sort parts ascending if they are not equal", () => {
  const result = splitInteger(13, 2);

  expect(result).toEqual([6, 7]);
});

test("should add zeros if value < numberOfParts", () => {
  const result = splitInteger(4, 12);

  expect(result).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]);
});
