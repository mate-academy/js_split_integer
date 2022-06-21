/**
 * @param {number} value
 * @param {number} numberOfParts
 *
 * @returns {number[]}
 */
function splitInteger(value, numberOfParts) {
  const parts = []; // create array with  N elements = numberOfParts
  let rest = value; // rest is initially value which declines with each iteration

  for (let partsLeft = numberOfParts; partsLeft > 0; partsLeft--) { // if partsleft >0 condition's true
    const part = Math.floor(rest / partsLeft); // 1st iteration = value/numberOfParts

    parts.push(part); // result from 1st iteration added to array
    rest -= part; // value decreased by the 1st element of array
  }

  return parts;
}

module.exports = splitInteger;
