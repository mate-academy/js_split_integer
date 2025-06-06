'use strict';

/**
 * @param {number} val
 * @param {number} numberOfParts
 *
 * @returns {number[]}
 */
function splitInteger(val, numberOfParts) {
  const parts = [];
  let rest = val;

  for (let partsLeft = numberOfParts; partsLeft > 0; partsLeft--) {
    const part = Math.floor(rest / partsLeft);

    parts.push(part);
    rest -= part;
  }

  return parts;
}

module.exports = splitInteger;
