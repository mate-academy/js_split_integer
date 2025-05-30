'use strict';

/**
 * @param {number} value
 * @param {number} numberOfParts
 * @returns {number[]}
 */
function splitInteger(value, numberOfParts) {
  const base = Math.floor(value / numberOfParts);
  const remainder = value % numberOfParts;

  const result = [];

  for (let i = 0; i < numberOfParts; i++) {
    if (i < remainder) {
      result.push(base + 1); // перші "remainder" частини на одиницю більші
    } else {
      result.push(base);
    }
  }

  return result.sort((a, b) => a - b); // сортуємо у зростаючому порядку
}

module.exports = splitInteger;
