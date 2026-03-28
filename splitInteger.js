function splitInteger(value, numberOfParts) {
  const base = Math.floor(value / numberOfParts);
  const remainder = value % numberOfParts;

  const result = new Array(numberOfParts - remainder).fill(base);
  result.push(...new Array(remainder).fill(base + 1));

  return result.sort((a, b) => a - b);
}

module.exports = splitInteger;
