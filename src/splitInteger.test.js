/* eslint-disable quotes */
"use strict";

const splitInteger = require("./splitInteger");

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const value = 10;
  const numberOfParts = 2;
  const expected = [5, 5];

  const actual = splitInteger(value, numberOfParts);

  expect(actual).toEqual(expected);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const value = 10;
  const numberOfParts = 1;
  const expected = [10];

  const actual = splitInteger(value, numberOfParts);

  expect(actual).toEqual(expected);
});

test("should sort parts ascending if they are not equal", () => {
  const value = 12;
  const numberOfParts = 5;
  const expected = [2, 2, 2, 3, 3];

  const actual = splitInteger(value, numberOfParts);

  expect(actual).toEqual(expected);
});

test("should add zeros if value < numberOfParts", () => {
  const value = 2;
  const numberOfParts = 3;
  const expected = [0, 1, 1];

  const actual = splitInteger(value, numberOfParts);

  expect(actual).toEqual(expected);
});
