'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(10, 5);

  expect(result).toEqual([2, 2, 2, 2, 2]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(8, 1);

  expect(result).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(5, 2);

  expect(result).toEqual([2, 3]);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(4, 5);

  expect(result).toEqual([0, 1, 1, 1, 1]);
});

test('splitInteger(6, 2) should return [3, 3]', () => {
  const result = splitInteger(6, 2);
  expect(result).toEqual([3, 3]);
});

test('splitInteger(17, 4) should return [4, 4, 4, 5]', () => {
  const result = splitInteger(17, 4);
  expect(result).toEqual([4, 4, 4, 5]);
});

test('splitInteger(32, 6) should return [5, 5, 5, 5, 6, 6]', () => {
  const result = splitInteger(32, 6);
  expect(result).toEqual([5, 5, 5, 5, 6, 6]);
});

