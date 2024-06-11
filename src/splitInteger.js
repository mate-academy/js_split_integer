// splitInteger.js
function splitInteger(value, numberOfParts) {
  const result = [];
  const baseValue = Math.floor(value / numberOfParts);
  const remainder = value % numberOfParts;

  for (let i = 0; i < numberOfParts; i++) {

    if (i < remainder) {
      result.push(baseValue + 1);
    } else {

      result.push(baseValue);
    }
  }

  return result.sort((a, b) => a - b);
}

module.exports = splitInteger;
