'use strict';

/**
 * @param {number} value
 * @param {number} numberOfParts
 *
 * @returns {number[]}
 */
'use strict';

function splitInteger(value, numberOfParts) {
  const base = Math.floor(value / numberOfParts);
  const remainder = value % numberOfParts;

  const parts = new Array(numberOfParts).fill(base);

  for (let i = numberOfParts - remainder; i < numberOfParts; i++) {
    parts[i] += 1;
  }

  return parts;
}

module.exports = splitInteger;