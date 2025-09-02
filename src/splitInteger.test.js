'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const parts = splitInteger(8, 1);

  expect(parts).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  const parts = splitInteger(3, 5);

  expect(parts).toEqual([0, 0, 1, 1, 1]);
});

test('should return array with ones if value === numberOfParts ', () => {
  expect(splitInteger(5, 5)).toEqual([1, 1, 1, 1, 1]);
});

test('Every part should be an integer', () => {
  expect(splitInteger(17, 4).every(part => Number.isInteger(part))).toBe(true);
});

test('The sum of all parts should be equal to the value', () => {
  expect(splitInteger(17, 4).reduce((acc, part) => acc + part, 0)).toBe(17);
});

test('The max part should not be greater than min part + 1', () => {
  const parts = splitInteger(17, 4);
  const max = Math.max(...parts);
  const min = Math.min(...parts);

  expect(max - min <= 1).toBe(true);
});
