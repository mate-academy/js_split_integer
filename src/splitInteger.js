'use strict';
/**
 * @param {number} value
 * @param {number} numberOfParts
 *
 * @returns {number[]}
 */

function splitInteger(value, numberOfParts) {
  let parts = [];
  let rest = value;

  if (value > numberOfParts) {
    for (let partsLeft = numberOfParts; partsLeft > 0; partsLeft--) {
      const part = Math.floor(rest / partsLeft);

      parts.push(part);
      rest -= part;
    }
  } else {
    parts = Array(numberOfParts).fill(0);
  }

  return parts;
}

module.exports = splitInteger;
