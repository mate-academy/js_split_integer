'use strict';

function splitInteger(value, numberOfParts) {
  const part = Math.floor(value / numberOfParts);
  const remainder = value % numberOfParts;
  const result = Array(numberOfParts).fill(part);

  for (let i = 0; i < remainder; i++) {
    result[i]++;
  }

  return result.sort((a, b) => a - b);
}

module.exports = splitInteger;
