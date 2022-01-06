'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if a value is
  divisible by a numberOfParts`, () => {
  const actual = splitInteger(8, 1);
  const expected = [8];

  expect(actual)
    .toStrictEqual(expected);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const actual = splitInteger(6, 2);
  const expected = [3, 3];

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
  const actual = splitInteger(32, 6);
  const expected = [5, 5, 5, 5, 6, 6];

  expect(actual)
    .toStrictEqual(expected);
});
