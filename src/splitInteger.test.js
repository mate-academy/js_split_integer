'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const actual = splitInteger(10, 2);
  const expected = [5, 5];

  expect(actual).toEqual(expected);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const actual = splitInteger(10, 1);
  const expected = [10];

  expect(actual).toEqual(expected);
});

test('should sort parts ascending if they are not equal', () => {
  const actual = splitInteger(10, 3);
  const expected = [3, 3, 4];

  expect(actual).toEqual(expected);
});

test('should add zeros if value < numberOfParts', () => {
  const actual = splitInteger(2, 3);
  const expected = [0, 0, 2];

  expect(actual).toEqual(expected);
});
