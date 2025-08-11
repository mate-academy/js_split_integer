'use strict';

const splitInteger = require('./splitInteger');

test('splitInteger should handle basic cases', () => {
    expect(splitInteger(8, 1)).toEqual([8]);
    expect(splitInteger(6, 2)).toEqual([3, 3]);
    expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
    expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});

test('splitInteger should handle cases where value is exactly divisible by numberOfParts', () => {
    expect(splitInteger(10, 2)).toEqual([5, 5]);
    expect(splitInteger(9, 3)).toEqual([3, 3, 3]);
    expect(splitInteger(20, 5)).toEqual([4, 4, 4, 4, 4]);
});

test('splitInteger should handle cases where value is not exactly divisible by numberOfParts', () => {
    expect(splitInteger(11, 2)).toEqual([5, 6]);
    expect(splitInteger(15, 4)).toEqual([3, 4, 4, 4]);
    expect(splitInteger(25, 6)).toEqual([4, 4, 4, 4, 4, 5]);
});

test('splitInteger should return sorted arrays', () => {
    const result = splitInteger(17, 4);
    expect(result).toEqual(result.slice().sort((a, b) => a - b));
});

test('splitInteger should have max-min difference <= 1', () => {
    const result = splitInteger(17, 4);
    const min = Math.min(...result);
    const max = Math.max(...result);
    expect(max - min).toBeLessThanOrEqual(1);
});
