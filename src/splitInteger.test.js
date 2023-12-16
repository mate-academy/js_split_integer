'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const expected = [3, 3];

  expect(splitInteger(6, 2)).toEqual(expected);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const expected = [8];

  expect(splitInteger(8, 1)).toEqual(expected);
});

test('should sort parts ascending if they are not equal', () => {
  const expected = [4, 4, 4, 5];

  expect(splitInteger(17, 4)).toEqual(expected);
});

test('should add zeros if value < numberOfParts', () => {
  const expected = [0, 1, 1, 1];

  expect(splitInteger(3, 4)).toEqual(expected);
});
