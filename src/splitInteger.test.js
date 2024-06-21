'use strict';

const splitInteger = require('./splitInteger');

// const splitInteger = require('./splitInteger').default;

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const parts = splitInteger(10, 5);

  expect(parts).toEqual([2, 2, 2, 2, 2]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const parts = splitInteger(10, 1);

  expect(parts).toEqual([10]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(13, 5);

  expect(result).toEqual([2, 2, 3, 3, 3]);
  expect(result).toEqual(result.slice().sort((a, b) => a - b));
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(2, 4);

  expect(result).toEqual([0, 0, 1, 1]);
});
