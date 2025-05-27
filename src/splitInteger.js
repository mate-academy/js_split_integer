'use strict';

/**
 * @param {number} value
 * @param {number} numberOfParts
 *
 * @returns {number[]}
 */
function splitInteger(value, numberOfParts) {
  const parts = [];
  let rest = value;
describe('splitInteger', () => {
  test('should split an even number into equal parts', () => {
    expect(splitInteger(10, 2)).toEqual([5, 5]);
  });

  test('should split an odd number into parts with remainder distributed', () => {
    expect(splitInteger(7, 3)).toEqual([3, 2, 2]);
  });

  test('should handle value less than number of parts', () => {
    expect(splitInteger(3, 5)).toEqual([1, 1, 1, 0, 0]);
  });

  test('should split when value equals number of parts', () => {
    expect(splitInteger(5, 5)).toEqual([1, 1, 1, 1, 1]);
  });

  // Test case 5: Number of parts is 1
  test('should return the value in an array when numberOfParts is 1', () => {
    expect(splitInteger(100, 1)).toEqual([100]);
  });

  test('should return an array of zeros when value is 0', () => {
    expect(splitInteger(0, 5)).toEqual([0, 0, 0, 0, 0]);
  });

  test('should handle large numbers correctly', () => {
    expect(splitInteger(1000000, 3)).toEqual([333334, 333333, 333333]);
  });
  
  for (let partsLeft = numberOfParts; partsLeft > 0; partsLeft--) {
    const part = Math.floor(rest / partsLeft);
  test('should handle negative value correctly', () => {
    expect(splitInteger(-10, 2)).toEqual([-5, -5]);
  });

    parts.push(part);
    rest -= part;
  }
  test('should return an empty array for non-positive numberOfParts', () => {
    expect(splitInteger(10, 0)).toEqual([]);
    expect(splitInteger(10, -3)).toEqual([]);
  });

  return parts;
}
  test('should handle more complex uneven splits', () => {
    expect(splitInteger(17, 4)).toEqual([5, 4, 4, 4]);
  });

module.exports = splitInteger;
  test('should handle value slightly greater than number of parts', () => {
    expect(splitInteger(6, 5)).toEqual([2, 1, 1, 1, 1]);
  });
});
