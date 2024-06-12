'use strict';

function splitInteger(value, numberOfParts) {
  const partSize = Math.floor(value / numberOfParts);
  const parts = new Array(numberOfParts).fill(partSize);
  const remainder = value % numberOfParts;

  for (let i = 0; i < remainder; i++) {
    parts[i]++;
  }

  return parts.sort((a, b) => a - b);
}

module.exports = splitInteger;
