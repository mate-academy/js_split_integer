'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const split = splitInteger(10, 2);
  const result = [5, 5];

  expect(split).toEqual(result);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const split = splitInteger(10, 1);
  const result = [10];

  expect(split).toEqual(result);
});

test('should sort parts ascending if they are not equal', () => {
  const split = splitInteger(17, 4);
  const result = [4, 4, 4, 5];

  expect(split).toEqual(result);
});

test('should add zeros if value < numberOfParts', () => {
  const split = splitInteger(0, 3);
  const result = [0, 0, 0];

  expect(split).toEqual(result);
});
