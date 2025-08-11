'use strict';

const splitInteger = require('./splitInteger.js');

test('should split a number into equal parts', () => {
  expect(splitInteger(8, 1)).toEqual([8]);
  expect(splitInteger(6, 2)).toEqual([3, 3]);
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});

test('should return a part equals to a value when splitting into 1 part', () => {
  expect(splitInteger(8, 1)).toEqual([8]);
  expect(splitInteger(6, 1)).toEqual([6]);
});

test('should sort parts ascending', () => {
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(4, 6)).toEqual([0, 0, 1, 1, 1, 1]);
  expect(splitInteger(2, 3)).toEqual([0, 1, 1]);
});

test('difference between min and max number in the array <= 1', () => {
  const result = splitInteger(8, 3);
  const max = Math.max(...result);
  const min = Math.min(...result);

  expect(max - min).toBeLessThanOrEqual(1);
});
