/**
 * @param {number} value
 * @param {number} numberOfParts
 *
 * @returns {number[]}
 */
  'use strict';

  function splitInteger(value, numberOfParts) {
    const parts = [];
    let rest = value;

    for (let partsLeft = numberOfParts; partsLeft > 0; partsLeft--) {
      const part = Math.floor(rest / partsLeft);

      parts.push(part);
      rest -= part;
    }

    return parts;
  }

  module.exports = splitInteger;

  test('The difference between the max and min <= 1', () => {
    const result = splitInteger(10, 3);
    const max = Math.max(...result);
    const min = Math.min(...result);

    expect(max - min).toBeLessThanOrEqual(1);
  });

  test('The array should be sorted ascending', () => {
    const result = splitInteger(10, 3);

    expect(result).toEqual(result.sort((a, b) => a - b));
  });