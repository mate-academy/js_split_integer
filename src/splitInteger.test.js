'use strict';

const splitInteger = require('./splitInteger');

describe('splitInteger', () => {
  it('should return an array', () => {
    expect(Array.isArray(splitInteger(8, 1))).toBe(true);
  });

  it('should return a part equal to the value when splitting into 1 part', () => {
    expect(splitInteger(8, 1)).toEqual([8]);
  });

  it('should split into equal parts if value is divisible by numberOfParts', () => {
    expect(splitInteger(6, 2)).toEqual([3, 3]);
    expect(splitInteger(12, 3)).toEqual([4, 4, 4]);
  });

  it('should return a sorted array when value is not divisible', () => {
    expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
    expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  });

  it('should add zeros when value is less than numberOfParts', () => {
    expect(splitInteger(1, 2)).toEqual([0, 1]);
    expect(splitInteger(2, 5)).toEqual([0, 0, 0, 1, 1]);
  });

  it('should return exactly numberOfParts elements', () => {
    expect(splitInteger(17, 4)).toHaveLength(4);
    expect(splitInteger(32, 6)).toHaveLength(6);
    expect(splitInteger(1, 5)).toHaveLength(5);
  });

  it('should return parts that sum up to the value', () => {
    const result = splitInteger(32, 6);
    const sum = result.reduce((acc, part) => acc + part, 0);

    expect(sum).toBe(32);
  });

  it('should return parts with max and min difference <= 1', () => {
    const result = splitInteger(100, 7);
    const difference = Math.max(...result) - Math.min(...result);

    expect(difference).toBeLessThanOrEqual(1);
  });

  it('should return an array sorted ascending', () => {
    const result = splitInteger(47, 9);
    const sorted = [...result].sort((a, b) => a - b);

    expect(result).toEqual(sorted);
  });

  it('should return integers only', () => {
    const result = splitInteger(17, 4);

    expect(result.every(Number.isInteger)).toBe(true);
  });
});
