'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(6, 3)).toStrictEqual([2, 2, 2]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(10, 1)).toStrictEqual([10]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(15, 3)).toStrictEqual([5, 5, 5]);
});

test(`should ensure the difference between the max and min is <= 1`, () => {
  const result = splitInteger(17, 4);

  expect(Math.max(...result) - Math.min(...result)).toBeLessThanOrEqual(1);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(3, 6)).toStrictEqual([0, 0, 0, 1, 1, 1]);
});
