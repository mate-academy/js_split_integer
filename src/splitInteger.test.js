'use strict';

const splitInteger = require('./splitInteger');

const assertionFunc = (value, numberOfParts) => {
  const result = splitInteger(value, numberOfParts);

  expect(result.every(Number.isInteger)).toBeTruthy();

  expect(result.reduce((a, b) => a + b, 0)).toBe(value);

  expect(result).toHaveLength(numberOfParts);

  for (let i = 0; i < result.length - 1; i++) {
    expect(result[i + 1]).toBeGreaterThanOrEqual(result[i]);
  }

  const maxNumber = Math.max(...result);
  const minNumber = Math.min(...result);

  expect(maxNumber - minNumber).toBeLessThanOrEqual(1);

  return result;
};

test(
  `should split a number into equal parts
   if a value is divisible by a numberOfParts`,
  () => {
    expect(assertionFunc(6, 2)).toEqual([3, 3]);
  }
);

test('should return a part equal to value when splitting into 1 part', () => {
  expect(assertionFunc(8, 1)).toEqual([8]);
});

test('should include zeros when value < numberOfParts', () => {
  const result = assertionFunc(5, 6);

  expect(result).toContain(0);
});

test('should split 32 into 6 parts as in example', () => {
  expect(assertionFunc(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});

test('should split 17 into 4 parts as in example', () => {
  expect(assertionFunc(17, 4)).toEqual([4, 4, 4, 5]);
});
