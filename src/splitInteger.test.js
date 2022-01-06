'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if a value is
  divisible by a numberOfParts`, () => {
  const actual = splitInteger(8, 4);
  const expected = [2, 2, 2, 2];

  expect(actual)
    .toStrictEqual(expected);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const actual = splitInteger(6, 1);
  const expected = [6];

  expect(actual)
    .toStrictEqual(expected);
});

test('should sort parts ascending if they are not equal', () => {
  const actual = splitInteger(17, 4);
  const expected = [4, 4, 4, 5];

  expect(actual)
    .toStrictEqual(expected);
});

test('should add zeros if value < numberOfParts', () => {
  const actual = splitInteger(2, 4);
  const expected = [0, 0, 1, 1];

  expect(actual)
    .toStrictEqual(expected);
});

test('should return all zeros if value === 0', () => {
  const actual = splitInteger(0, 4);
  const expected = [0, 0, 0, 0];

  expect(actual)
    .toStrictEqual(expected);
});

test('should return empty array if numberOfParts === 0', () => {
  const actual = splitInteger(6, 0);
  const expected = [];

  expect(actual)
    .toStrictEqual(expected);
});
