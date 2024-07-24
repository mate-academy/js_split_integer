'use strict';

/**
 * @param {number} value
 * @param {number} numberOfParts
 *
 * @returns {number[]}
 */
function splitInteger(value, numberOfParts) {
  const minPart = Math.floor(value / numberOfParts);
  const remainder = value % numberOfParts;

  // Create an array with all parts equal to minPart
  const parts = Array(numberOfParts).fill(minPart);

  // Distribute the remainder by incrementing the first few elements
  for (let i = 0; i < remainder; i++) {
    parts[i]++;
  }

  return parts.sort((a, b) => a - b);
}

module.exports = splitInteger;
