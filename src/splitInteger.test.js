'use strict';

const splitInteger = require('./splitInteger'); // Adjust if needed

describe('splitInteger', () => {
  test('splits 10 into 2 parts', () => {
    const result = splitInteger(10, 2);

    expect(result).toHaveLength(2);
    expect(result.reduce((a, b) => a + b)).toBe(10);
  });

  test('splits 10 into 3 parts', () => {
    const result = splitInteger(10, 3);

    expect(result).toHaveLength(3);
    expect(result.reduce((a, b) => a + b)).toBe(10);
  });

  test('splits 7 into 7 parts', () => {
    const result = splitInteger(7, 7);

    expect(result).toEqual([1, 1, 1, 1, 1, 1, 1]);
  });

  test('splits 5 into 1 part', () => {
    const result = splitInteger(5, 1);

    expect(result).toEqual([5]);
  });
});
