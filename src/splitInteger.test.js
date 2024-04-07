'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(10, 5);

  expect(result.length).toBe(5);
  expect(Math.max(...result) - Math.min(...result)).toBeLessThanOrEqual(1);
  expect(result).toEqual([2, 2, 2, 2, 2]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(8, 1);

  expect(result.length).toBe(1);
  expect(result).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(15, 3);

  expect(result.length).toBe(3);
  expect(Math.max(...result) - Math.min(...result)).toBeLessThanOrEqual(1);
  expect(result).toEqual([5, 5, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(4, 6);
  const zerosCount = result.filter(num => num === 0).length;
  const onesCount = result.filter(num => num === 1).length;

  expect(result.length).toBe(6);
  expect(zerosCount).toBe(2);
  expect(onesCount).toBe(4);
  expect(Math.max(...result) - Math.min(...result)).toBeLessThanOrEqual(1);
});
