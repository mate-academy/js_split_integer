'use strict';

function toBeSortedAscending(arr) {
  if (hasRemainder(arr) === false) {
    return arr.every((val, i) => i === 0 || arr[i - 1] <= val);
  }
}

function hasRemainder(number, parts) {
  return number % parts === 0;
}

function hasSpilitEqual(result, number, parts) {
  const remainder = hasRemainder(number, parts);
  const length = result.length === parts;
  const equality
    = result[0] === result[result.length - 1]
    && result.every((e) => e === result[0]);

  return remainder ? (length ? equality : false) : false;
}

function hasEqualValueToNumber(result, number) {
  return result[0] === number ? result : false;
}

function zerosCounts(number, parts) {
  return Math.max(0, parts - number);
}

function howManyZerosInArray(result) {
  return result.reduce((acc, val) => (val === 0 ? acc + 1 : acc), 0);
}

module.exports = {
  toBeSortedAscending,
  hasSpilitEqual,
  hasEqualValueToNumber,
  zerosCounts,
  howManyZerosInArray,
};
