'use strict';

const splitInteger = require('./splitInteger');

describe('splitInteger', () => {
  // Provided examples
  test('should return [8] for splitInteger(8, 1)', () => {
    expect(splitInteger(8, 1)).toEqual([8]);
  });

  test('should return [3, 3] for splitInteger(6, 2)', () => {
    expect(splitInteger(6, 2)).toEqual([3, 3]);
  });

  test('should return [4, 4, 4, 5] for splitInteger(17, 4)', () => {
    expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  });

  test('should return [5, 5, 5, 5, 6, 6] for splitInteger(32, 6)', () => {
    expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  });

  // General property checks
  describe('general properties', () => {
    const testCases = [
      { value: 10, parts: 3, expected: [3, 3, 4] },
      { value: 7, parts: 3, expected: [2, 2, 3] },
      {
        value: 100,
        parts: 10,
        expected: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
      },
      { value: 5, parts: 2, expected: [2, 3] },
      { value: 1, parts: 3, expected: [0, 0, 1] },
    ];

    test.each(testCases)(
      'should split $value into $parts parts',
      ({ value, parts, expected }) => {
        const result = splitInteger(value, parts);

        // 1. Correct length
        expect(result).toHaveLength(parts);

        // 2. Sum equals original value
        const sum = result.reduce((acc, num) => acc + num, 0);

        expect(sum).toBe(value);

        // 3. Difference between max and min is <= 1
        const max = Math.max(...result);
        const min = Math.min(...result);

        expect(max - min).toBeLessThanOrEqual(1);

        // 4. Sorted ascending
        const sortedResult = [...result].sort((a, b) => a - b);

        expect(result).toEqual(sortedResult);

        // 5. Matches expected (for sanity)
        expect(result).toEqual(expected);
      },
    );
  });

  // Edge cases
  describe('edge cases', () => {
    test('should handle a single part equal to the value', () => {
      expect(splitInteger(42, 1)).toEqual([42]);
    });

    test('should handle value smaller than the number of parts', () => {
      expect(splitInteger(3, 5)).toEqual([0, 0, 1, 1, 1]);
    });

    test('should handle large numbers', () => {
      const value = 1000000;
      const parts = 7;
      const result = splitInteger(value, parts);

      expect(result).toHaveLength(parts);
      expect(result.reduce((acc, num) => acc + num, 0)).toBe(value);
      expect(Math.max(...result) - Math.min(...result)).toBeLessThanOrEqual(1);
    });
  });
});
