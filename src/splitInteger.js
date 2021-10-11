'use strict';

/**
 * @param {number} num
 * @param {number} parts
 *
 * @returns {number[]}
 */
function splitInteger(num, parts) {
  const result = [];
  const divisor = Math.floor(num / parts);
  const rest = num % parts;

  for (let i = 0; i < parts - rest; i++) {
    result.push(divisor);
  }

  for (let i = 0; i < rest; i++) {
    result.push(divisor + 1);
  }

  return result;
}
module.exports = splitInteger;
