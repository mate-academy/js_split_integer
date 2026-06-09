'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
  expect(splitInteger(6, 2)).toEqual([3, 3]);
});

test(`should split a number into as equal parts as possible
  and return exactly numberOfParts elements`, () => {
  const result = splitInteger(17, 4);

  expect(result).toEqual([4, 4, 4, 5]);
  expect(result).toHaveLength(4);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(32, 6);

  expect(result).toEqual([5, 5, 5, 5, 6, 6]);
  expect(result).toEqual(result.slice().sort((a, b) => a - b));
});

test('should keep the difference between max and min values <= 1', () => {
  const result = splitInteger(7, 3);

  expect(Math.max(...result) - Math.min(...result)).toBeLessThanOrEqual(1);
  expect(result).toEqual([2, 2, 3]);
});

test('should include zeros when value is smaller than numberOfParts', () => {
  expect(splitInteger(2, 4)).toEqual([0, 0, 1, 1]);
});
