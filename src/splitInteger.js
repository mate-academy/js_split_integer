'use strict';

/**
 * Splits a positive integer into an array of integer parts.
 *
 * @param {number} value - The integer value to split.
 * @param {number} numberOfParts - The number of parts to split the value into.
 * @returns {Array<number>} - An array containing exactly number
 */
function splitInteger(value, numberOfParts) {
  // Initialize an array with zeros
  const parts = new Array(numberOfParts).fill(0);

  // If value is less than numberOfParts, fill the array with incre
  if (value < numberOfParts) {
    for (let i = 0; i < value; i++) {
      parts[i] = i + 1; // Fill with values starting from 1
    }

    return parts;
  }

  // Calculate the base value for each part
  const baseValue = Math.floor(value / numberOfParts);
  const remainder = value % numberOfParts;

  // Fill the array with base values
  for (let i = 0; i < numberOfParts; i++) {
    parts[i] = baseValue;
  }

  // Distribute the remainder
  for (let i = 0; i < remainder; i++) {
    parts[i]++; // Increment the first 'remainder' elements
  }

  // Sort the parts in ascending order
  return parts.sort((a, b) => a - b);
}

// Exporting the function for use in other modules
module.exports = splitInteger;
