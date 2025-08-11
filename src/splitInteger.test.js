// eslint-disable-next-line strict
const splitInteger = require('./splitInteger');

describe('splitInteger', () => {
  test('should split integer into one part', () => {
    expect(splitInteger(8, 1)).toEqual([8]);
  });

  test('should split integer into two equal parts', () => {
    expect(splitInteger(6, 2)).toEqual([3, 3]);
  });

  // eslint-disable-next-line max-len
  test('should split integer into four parts, with difference of 1 between max and min', () => {
    expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  });

  // eslint-disable-next-line max-len
  test('should split integer into six parts, with difference of 1 between max and min', () => {
    expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  });

  test('should handle odd division with small value and few parts', () => {
    expect(splitInteger(9, 3)).toEqual([3, 3, 3]);
  });

  // eslint-disable-next-line max-len
  test('should handle division with more parts than value, returning 1s', () => {
    expect(splitInteger(5, 6)).toEqual([0, 1, 1, 1, 1, 1]);
  });

  test('should handle division with larger value and many parts', () => {
    // eslint-disable-next-line max-len
    expect(splitInteger(100, 20)).toEqual([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]);
  });

  // Updated test case to ensure the output is sorted
  test('should return the array sorted in ascending order', () => {
    const result = splitInteger(17, 4);

    expect(result).toEqual([4, 4, 4, 5]);

    // eslint-disable-next-line max-len
    const sortedResult = [...result].sort((a, b) => a - b); // Sort a copy of the array

    expect(result).toEqual(sortedResult); // Compare original to sorted copy
  });
});
