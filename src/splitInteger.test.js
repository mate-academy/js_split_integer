'use strict';

const splitInteger = require('./splitInteger');

test('should split into equal parts if divisible', () => {
  expect(splitInteger(12, 4)).toEqual([3, 3, 3, 3]);
});

test('should return value when parts = 1', () => {
  expect(splitInteger(15, 1)).toEqual([15]);
});

test('should sort parts in ascending order', () => {
  expect(splitInteger(18, 3)).toEqual([6, 6, 6]);
});

test('should add zeros if value < parts', () => {
  const result = splitInteger(5, 8);

  expect(result.length).toBe(8);

  const sum = result.reduce((acc, curr) => acc + curr, 0);

  expect(sum).toBe(5);
});
