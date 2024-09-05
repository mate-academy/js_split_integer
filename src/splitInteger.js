/**
 * @param {number} value
 * @param {number} numberOfParts
 *
 * @returns {number[]}
 */
function splitInteger(value, numberOfParts) {
  const basePart = Math.floor(value / numberOfParts);
  const remainder = value % numberOfParts; 
  const result = Array(numberOfParts).fill(basePart);
  for (let i = 0; i < remainder; i++) {
    result[i]++;
}

return result.sort((a, b) => a - b);
}
function runTests() {
  console.log(splitInteger(10, 2));
  console.log(splitInteger(10, 3));
  console.log(splitInteger(5, 5));
  console.log(splitInteger(9, 4)); 
  console.log(splitInteger(8, 3)); 
}

runTests();