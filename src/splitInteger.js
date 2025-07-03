// 'use strict';

// /**
//  * @param {number} value
//  * @param {number} numberOfParts
//  *
//  * @returns {number[]}
//  */
// function splitInteger(value, numberOfParts) {
//   const parts = [];
//   let rest = value;

//   for (let partsLeft = numberOfParts; partsLeft > 0; partsLeft--) {
//     const part = Math.floor(rest / partsLeft);

//     parts.push(part);
//     rest -= part;
//   }

//   return parts;
// }

// module.exports = splitInteger;

'use strict';

function splitInteger(value, numberOfParts) {
  const base = Math.floor(value / numberOfParts);
  const remainder = value % numberOfParts;
  const result = Array(numberOfParts).fill(base);

  for (let i = 0; i < remainder; i++) {
    result[numberOfParts - 1 - i] += 1;
  }

  // If value < numberOfParts, fill with zeros and ones
  if (value < numberOfParts) {
    return Array(numberOfParts - value).fill(0).concat(Array(value).fill(1));
  }

  return result;
}

module.exports = splitInteger;
