function splitInteger(value, numberOfParts) {
  const base = Math.floor(value / numberOfParts);
  const remainder = value % numberOfParts;

  const result = Array(numberOfParts).fill(base);
  for (let i = 0; i < remainder; i++) {
    result[i]++;
  }

  return result.sort((a, b) => a - b);
}

module.exports = splitInteger;
