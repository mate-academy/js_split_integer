'use strict';

const splitInteger = require('./splitInteger');

test('Split integer into 1 part', () => {
  expect(splitInteger(8, 1)).toEqual([8]);
});

test('Split integer into 2 parts', () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
});

test('Split integer into 4 parts', () => {
  const result = splitInteger(17, 4);

  expect(result).toHaveLength(4);
  expect(result.reduce((acc, val) => acc + val)).toBe(17);
  expect(Math.max(...result) - Math.min(...result)).toBeLessThanOrEqual(1);
});
