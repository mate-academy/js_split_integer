'use strict';

/**
 * @param {number} value
 * @param {number} numberOfParts
 *
 * @returns {number[]}
 */
function splitInteger(value, numberOfParts) {
  if (value === 0 || numberOfParts === 0) {
    return Array(numberOfParts).fill(0);
  }

  const part = Math.floor(value / numberOfParts);
  const remainder = value % numberOfParts;
  const result = Array(numberOfParts).fill(part);

  for (let i = 0; i < remainder; i++) {
    result[i]++;
  }

  return result;
}

module.exports = splitInteger;
