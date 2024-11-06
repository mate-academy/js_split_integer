"use strict";

const splitInteger = require("./splitInteger");

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(10, 5)).toEqual([2, 2, 2, 2, 2]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const value = Math.floor(Math.random() * 100) + 1;
  const result = splitInteger(value, 1);

  expect(result).toEqual([value]);
});

test("should sort parts ascending if they are not equal", () => {
  const result = splitInteger(19, 3);

  expect(result).toEqual([6, 6, 7]);
});

test("should add zeros if value < numberOfParts", () => {
  expect(splitInteger(2, 3)).toEqual([0, 1, 1]);
});
