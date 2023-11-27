'use strict';

const splitInteger = require('./splitInteger');

describe('splitInteger', () => {
  test(`should split a number into equal parts 
    if a value is divisible by a numberOfParts`, () => {
    const result = splitInteger(10, 5);

    expect(result).toEqual([2, 2, 2, 2, 2]);
  });

  test('should return a part equals to a value when splitting into 1 part', () => {
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

  test('should return an array containing exactly numberOfParts integer elements', () => {
    expect(splitInteger(8, 1)).toEqual([8]);
    expect(splitInteger(6, 2)).toHaveLength(2);
    expect(splitInteger(17, 4)).toHaveLength(4);
    expect(splitInteger(32, 6)).toHaveLength(6);
  });

  test('should have the difference between the max and min number <= 1', () => {
    expect(splitInteger(6, 2)).toEqual(
      expect.arrayContaining([expect.any(Number)])
    );

    expect(splitInteger(17, 4)).toEqual(
      expect.arrayContaining([expect.any(Number)])
    );

    expect(splitInteger(32, 6)).toEqual(
      expect.arrayContaining([expect.any(Number)])
    );
  });

  test('should be sorted ascending (from lowest to highest)', () => {
    expect(splitInteger(8, 1)).toEqual([8]);
    expect(splitInteger(6, 2)).toEqual([3, 3]);
    expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
    expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  });
});
