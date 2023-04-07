/**
 * @param {number} value
 * @param {number} numberOfParts
 *
 * @returns {number[]}
 */

'use strict';

function splitInteger(value, numberOfParts) {
  const parts = [];
  let rest = value;

  for (let partsLeft = numberOfParts; partsLeft > 0; partsLeft--) {
    const part = Math.floor(rest / partsLeft);

    parts.push(part);
    rest -= part;
  }

  if (parts.length === 1) {
    return parts[0];
  }

  return parts;
}

module.exports = splitInteger;
