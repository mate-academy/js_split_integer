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

  for (let i = numberOfParts; i > 0; i--) {
    const part = Math.floor(rest / i);

    parts.push(part);
    rest -= part;
  }

  return parts;
}

module.exports = splitInteger;
