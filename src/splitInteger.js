'use strict';

/**
 * @param {number} numVals
 * @param {number} numberOfParts
 *
 * @returns {number[]}
 */
function splitInteger(numVals, numberOfParts) {
  const parts = [];
  let rest = numVals;

  for (let partsLeft = numberOfParts; partsLeft > 0; partsLeft--) {
    const part = Math.floor(rest / partsLeft);

    parts.push(part);
    rest -= part;
  }

  return parts;
}

module.exports = splitInteger;
