'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
  expect(splitInteger(10, 5)).toEqual([2, 2, 2, 2, 2]);
  expect(splitInteger(8, 4)).toEqual([2, 2, 2, 2]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
  expect(splitInteger(32, 1)).toEqual([32]);
  expect(splitInteger(1, 1)).toEqual([1]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  expect(splitInteger(11, 3)).toEqual([3, 4, 4]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 5)).toEqual([0, 0, 0, 1, 1]);
  expect(splitInteger(3, 4)).toEqual([0, 1, 1, 1]);
  expect(splitInteger(1, 3)).toEqual([0, 0, 1]);
});

test('should return exactly numberOfParts elements', () => {
  expect(splitInteger(17, 4)).toHaveLength(4);
  expect(splitInteger(2, 5)).toHaveLength(5);
  expect(splitInteger(8, 1)).toHaveLength(1);
});

test('should return parts that sum up to the value', () => {
  const sum = (arr) => arr.reduce((acc, item) => acc + item, 0);

  expect(sum(splitInteger(17, 4))).toBe(17);
  expect(sum(splitInteger(32, 6))).toBe(32);
  expect(sum(splitInteger(2, 5))).toBe(2);
});

test('should return parts whose max and min differ by at most 1', () => {
  const result = splitInteger(32, 6);

  expect(Math.max(...result) - Math.min(...result)).toBeLessThanOrEqual(1);
});
