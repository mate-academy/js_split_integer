'use strict';

/**
 * @param {number} value
 * @param {number} numberOfParts
 *
 * @returns {number[]}
 */
function splitInteger(value, numberOfParts) {
  if (!Number.isInteger(value) || !Number.isInteger(numberOfParts)) {
    throw new TypeError('Both value and numberOfParts must be integers');
  }

  if (numberOfParts <= 0) {
    throw new RangeError('numberOfParts must be greater than zero');
  }

  if (value < 0) {
    throw new RangeError('value must be non-negative');
  }

  const parts = [];
  let rest = value;

  for (let partsLeft = numberOfParts; partsLeft > 0; partsLeft--) {
    const part = Math.floor(rest / partsLeft);

    parts.push(part);
    rest -= part;
  }

  parts.sort((a, b) => a - b);

  return parts;
}

module.exports = splitInteger;
