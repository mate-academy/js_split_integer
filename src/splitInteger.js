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
    const result = Math.floor(rest / partsLeft);

    parts.push(result);
    rest -= result;
  }

  return parts;
}

module.exports = splitInteger;
