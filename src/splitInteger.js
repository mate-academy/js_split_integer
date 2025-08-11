'use strict';

/**
 * @param {number} value
 * @param {number} numberOfParts
 *
 * @returns {number[]}
 */
function splitInteger(num, numberOfParts) {
  const base = Math.floor(num / numberOfParts);
  const remainder = num % numberOfParts;
  const result = [];

  for (let i = 0; i < numberOfParts; i++) {
    if (i >= numberOfParts - remainder) {
      result.push(base + 1);
    } else {
      result.push(base);
    }
  }

  return result;
}
module.exports = splitInteger;
