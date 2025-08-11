'use strict';

const splitInteger = require('./splitInteger');

test('return an array with the exact number of parts', () => {
  expect(splitInteger(8, 1)).toEqual([8]);
  expect(splitInteger(6, 2)).toEqual([3, 3]);
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});

test('minimum values', () => {
  expect(splitInteger(1, 1)).toEqual([1]);
  expect(splitInteger(2, 2)).toEqual([1, 1]);
});

test('value is evenly divisible by numberOfParts', () => {
  expect(splitInteger(10, 2)).toEqual([5, 5]);
  expect(splitInteger(12, 3)).toEqual([4, 4, 4]);
  expect(splitInteger(20, 5)).toEqual([4, 4, 4, 4, 4]);
});

test('value is not evenly divisible by numberOfParts', () => {
  expect(splitInteger(10, 3)).toEqual([3, 3, 4]);
  expect(splitInteger(13, 5)).toEqual([2, 2, 3, 3, 3]);
  expect(splitInteger(19, 4)).toEqual([4, 5, 5, 5]);
});

test('larger values', () => {
  expect(splitInteger(100, 10))
    .toEqual([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);

  expect(splitInteger(101, 10))
    .toEqual([10, 10, 10, 10, 10, 10, 10, 10, 10, 11]);

  expect(splitInteger(123, 12))
    .toEqual([10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11]);
});

test('numberOfParts is greater than value', () => {
  expect(splitInteger(5, 7)).toEqual([0, 0, 1, 1, 1, 1, 1]);
});
