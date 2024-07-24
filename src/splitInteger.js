'use strict';

/**
 * @param {number} value
 * @param {number} numberOfParts
 *
 * @returns {number[]}
 */
function splitInteger(value, numberOfParts) {
  const baseValue = Math.floor(value / numberOfParts);
  const remainder = value % numberOfParts;
  const result = Array(numberOfParts).fill(baseValue);

  for (let i = 0; i < remainder; i++) {
    result[i]++;
  }

  return result.sort((a, b) => a - b);
}

module.exports = splitInteger;
