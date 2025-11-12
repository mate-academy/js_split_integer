"use strict";

const splitInteger = require("./splitInteger");

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(6, 3)).toEqual([2, 2, 2]);
  expect(splitInteger(10, 5)).toEqual([2, 2, 2, 2, 2]);
  expect(splitInteger(8, 4)).toEqual([2, 2, 2, 2]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(10, 1)).toEqual([10]);
});

test("should sort parts ascending if they are not equal", () => {
  expect(splitInteger(10, 3)).toEqual([3, 3, 4]);
  expect(splitInteger(11, 4)).toEqual([2, 3, 3, 3]);
});

test("should add zeros if value < numberOfParts", () => {
  expect(splitInteger(3, 5)).toEqual([0, 0, 1, 1, 1]);
  expect(splitInteger(2, 4)).toEqual([0, 0, 1, 1]);
  expect(splitInteger(1, 3)).toEqual([0, 0, 1]);
});

test("splitInteger(8, 1) should return [8]", () => {
  expect(splitInteger(8, 1)).toEqual([8]);
});

test("splitInteger(6, 2) should return [3, 3]", () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
});

test("splitInteger(17, 4) should return [4, 4, 4, 5]", () => {
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
});

test("splitInteger(32, 6) should return [5, 5, 5, 5, 6, 6]", () => {

  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});
