'use strict';

const splitInteger = require('./splitInteger');

test('split into equal parts if value is divisible by numberOfParts', () => {
  expect(splitInteger(10, 2)).toEqual([5, 5]);
  expect(splitInteger(12, 3)).toEqual([4, 4, 4]);
  expect(splitInteger(20, 4)).toEqual([5, 5, 5, 5]);
});

test('return value when splitting into 1 part', () => {
  expect(splitInteger(8, 1)).toEqual([8]);
  expect(splitInteger(15, 1)).toEqual([15]);
  expect(splitInteger(23, 1)).toEqual([23]);
});

test('sort parts ascending if they are not equal', () => {
  expect(splitInteger(11, 3)).toEqual([3, 4, 4]);
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  expect(splitInteger(23, 6)).toEqual([3, 4, 4, 4, 4, 4]);
});

test('add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 2)).toEqual([0, 1]);
  expect(splitInteger(2, 5)).toEqual([0, 0, 0, 1, 1]);
  expect(splitInteger(3, 6)).toEqual([0, 0, 0, 1, 1, 1]);
});
