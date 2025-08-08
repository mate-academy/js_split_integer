'use strict';

const splitInteger = require('./splitInteger');

function sumValues(result) {
  return result.reduce((acc, currentEl) => {
    return acc + currentEl;
  }, 0);
}

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(9, 3);

  expect(result).toHaveLength(3);
  expect(sumValues(result)).toBe(9);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(9, 1);

  expect(result).toHaveLength(1);
  expect(result[0]).toBe(9);
  expect(sumValues(result)).toBe(9);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(9, 4);
  const isTrue = result.every((el, index, array) => {
    return index === array.length - 1 || el <= array[index + 1];
  });

  expect(isTrue).toBe(true);
  expect(result).toHaveLength(4);
  expect(sumValues(result)).toBe(9);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(1, 3);

  expect(result).toHaveLength(3);
  expect(result).toContain(0);
  expect(sumValues(result)).toBe(1);
});

test(`the difference between the max and min
  number in the array should be <= 1`, () => {
  const result = splitInteger(9, 4);
  const isTrue = result.every((el, index, array) => {
    return index === array.length - 1 || array[index + 1] - el <= 1;
  });

  expect(isTrue).toBe(true);
  expect(result).toHaveLength(4);
  expect(sumValues(result)).toBe(9);
});
