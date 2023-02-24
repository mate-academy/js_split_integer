'use strict';

const splitInteger = require('./splitInteger');
// const { parts } = require('./splitInteger');

test(`should split a number into equal parts if a value
 is divisible by  a numberOfParts`, () => {
  expect(splitInteger(16, 4)).toEqual([4, 4, 4, 4]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const mas = [4];

  expect(splitInteger(4, 1).length).toEqual(mas.length);
});

test('should return corect equal', () => {
  expect(splitInteger(8, 1)).toEqual([8]);
  expect(splitInteger(6, 2)).toEqual([3, 3]);
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  const numberOfParts = 4;
  const value = 3;

  expect(value).toBeLessThan(numberOfParts);
});

test('should returns a object', () => {
  expect(typeof splitInteger(8, 1)).toBe('object');
});

test('array should be sorted in ascending order', () => {
  const arr1 = splitInteger(8, 1);
  expect(arr1).toEqual([8]);

  const arr2 = splitInteger(6, 2);
  expect(arr2).toEqual([3, 3]);

  const arr3 = splitInteger(17, 4);
  expect(arr3).toEqual([4, 4, 4, 5]);

  const arr4 = splitInteger(32, 6);
  expect(arr4).toEqual([5, 5, 5, 5, 6, 6]);
});

test('returns an array with specified length', () => {
  expect(splitInteger(8, 1).length).toBe(1);
  expect(splitInteger(6, 2).length).toBe(2);
  expect(splitInteger(17, 4).length).toBe(4);
  expect(splitInteger(32, 6).length).toBe(6);
});
