function splitInteger(value, numberOfParts) {
    const quotient = Math.floor(value / numberOfParts);
    const remainder = value % numberOfParts;
    const result = Array(numberOfParts).fill(quotient);
    for (let i = 0; i < remainder; i++) {
      result[i] += 1;
    }
    return result.sort((a, b) => a - b);
}
