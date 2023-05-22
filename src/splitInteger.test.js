'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const actual = splitInteger(9, 3);
  const expected = [3, 3, 3];

  expect(actual).toEqual(expected);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const actual = splitInteger(5, 1);
  const expected = [5];

  expect(actual).toEqual(expected);
});

test('should sort parts ascending if they are not equal', () => {
  const actual = splitInteger(23, 5);
  const expected = [4, 4, 5, 5, 5];

  expect(actual).toEqual(expected);
});

test('should add zeros if value < numberOfParts', () => {
  const actual = splitInteger(2, 3);
  const expected = [0, 1, 1];

  expect(actual).toEqual(expected);
});
