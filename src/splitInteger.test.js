'use strict';

const splitInteger = require('./splitInteger');

test('should split a number into equal parts if a value is divisible by a numberOfParts', () => {
  const result = splitInteger(50, 2);

  expect(result).toEqual([25, 25]);
});

test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(8, 4);

  expect(result).toEqual([2, 2, 2, 2]);
});

test(`Should return the original value when splitting into 1 part`, () => {
  const result = splitInteger(6, 1);

  expect(result).toEqual([6]);
});

test('should sort parts in ascending order if they are not equal', () => {
  const result = splitInteger(10, 3);

  expect(result).toEqual([3, 3, 4]);
});

test('should sort parts in ascending order if they are not equal', () => {
  const result = splitInteger(17, 4);

  expect(result).toEqual([4, 4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(4, 5);

  expect(result).toEqual([0, 1, 1, 1, 1]);
});

test('should add as much zeros as needed if value < numberOfParts', () => {
  const result = splitInteger(5, 10);

  expect(result).toEqual([0, 0, 0, 0, 0, 1, 1, 1, 1, 1]);
});
