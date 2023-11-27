'use strict';

const splitInteger = require('./splitInteger');

describe('splitInteger', () => {
  test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
    const result = splitInteger(10, 5);

    expect(result).toEqual([2, 2, 2, 2, 2]);
  });

  test(`should return a part equals to a value
  when splitting into 1 part`, () => {
    const result = splitInteger(10, 1);

    expect(result).toEqual([10]);
  });

  test('should sort parts ascending if they are not equal', () => {
    const result = splitInteger(15, 3);

    expect(result).toEqual([5, 5, 5]);
  });

  test('should add zeros if value < numberOfParts', () => {
    const result = splitInteger(3, 5);

    expect(result).toEqual([0, 0, 1, 1, 1]);
  });

  test(`should return an array containing 
  exactly numberOfParts integer elements`, () => {
    const result = splitInteger(8, 1);

    expect(result).toEqual([8]);
  });

  test(`should have the difference between
  the max and min number <= 1`, () => {
    const result = splitInteger(6, 2);

    expect(Math.max(...result) - Math.min(...result)).toBeLessThanOrEqual(1);
  });

  test('should be sorted ascending (from lowest to highest)', () => {
    const result = splitInteger(6, 2);

    expect(result).toEqual([3, 3]);
  });
});
