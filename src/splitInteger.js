'use strict';

/**
 * @param {number} value
 * @param {number} numberOfParts
 *
 * @returns {number[]}
 */
function splitInteger(value, numberOfParts) {
  const countZero = value < numberOfParts ? numberOfParts - value + 1 : null;
  const parts = [];
  let rest = value;

  for (let partsLeft = numberOfParts; partsLeft > 0; partsLeft--) {
    if (countZero) {
      const addNum = partsLeft === value ? 1 : 0;

      parts.push(addNum);

      continue;
    }

    const part = Math.floor(rest / partsLeft);

    parts.push(part);
    rest -= part;
  }

  return parts;
}

module.exports = splitInteger;
