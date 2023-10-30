/**
 * @param {number} value
 * @param {number} numberOfParts
 *
 * @returns {number[]}
 */
function splitInteger(value, numberOfParts) {
  const parts = [];
  let rest = value;

  if (rest < numberOfParts) {
    parts.push(0);

    return parts;
  }

  for (let partsLeft = numberOfParts; partsLeft > 0; partsLeft--) {
    const part = Math.floor(rest / partsLeft);

    parts.push(part);
    rest -= part;
  }

  return parts;
}

module.exports = splitInteger;
