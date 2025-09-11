'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(12, 3)).toEqual([4, 4, 4]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(8, 3)).toEqual([2, 3, 3]);
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
});

test('should always return an array of length numberOfParts', () => {
  expect(splitInteger(32, 6)).toHaveLength(6);
});

test('should return an array with integer in every case', () => {
  expect(splitInteger(5, 3).every(Number.isInteger)).toBe(true);
  expect(splitInteger(5, 10).every(Number.isInteger)).toBe(true);
});

test('should sum of parts always equal to value', () => {
  const value = 17;

  expect(splitInteger(value, 3).reduce((a, b) => a + b, 0)).toBe(value);
  expect(splitInteger(value, 10).reduce((a, b) => a + b, 0)).toBe(value);
  expect(splitInteger(value, 1).reduce((a, b) => a + b, 0)).toBe(value);
});

test('should deference between max and min part to be <= 1', () => {
  if (splitInteger().length > 0) {
    expect(Math.max(...splitInteger(17, 3)) - Math.min(...splitInteger(17, 3)))
      .toBeLessThanOrEqual(1);

    expect(Math.max(...splitInteger(17, 10)) - Math.min(...splitInteger(17, 10)))
      .toBeLessThanOrEqual(1);

    expect(Math.max(...splitInteger(17, 4)) - Math.min(...splitInteger(17, 4)))
      .toBeLessThanOrEqual(1);
  }
});

test('should return an array is sorted in non-decreasing order', () => {
  expect(splitInteger(32, 6)).toEqual(splitInteger(32, 6).slice()
    .sort((a, b) => a - b));

  expect(splitInteger(17, 4)).toEqual(splitInteger(17, 4).slice()
    .sort((a, b) => a - b));

  expect(splitInteger(8, 1)).toEqual(splitInteger(8, 1).slice()
    .sort((a, b) => a - b));
});

test('should return an array with amount of larger parts to equal value % numberOfParts if not evenly divisible ', () => {
  expect(splitInteger(17, 4).filter((part) => part === 5)).toHaveLength(1);
  expect(splitInteger(32, 6).filter((part) => part === 6)).toHaveLength(2);
});
