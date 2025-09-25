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

  for (let partsLeft = numberOfParts; partsLeft > 0; partsLeft--) {
    const part = Math.floor(rest / partsLeft);

    parts.push(part);
    rest -= part;
  }

  return parts;
}
function checkInvariants(result, value, numberOfParts) {
  // length must equal numberOfParts
  expect(result.length).toBe(numberOfParts);

  // sum must equal value
  expect(result.reduce((a, b) => a + b, 0)).toBe(value);

  // must be sorted ascending
  expect(result).toEqual([...result].sort((a, b) => a - b));

  // max - min <= 1
  const min = Math.min(...result);
  const max = Math.max(...result);
  expect(max - min).toBeLessThanOrEqual(1);
}

module.exports = splitInteger;
