'use strict';

const splitInteger = require('./splitInteger');

function checkInvariants(result, value, numberOfParts) {
  // length must equal numberOfParts
  expect(result.length).toBe(numberOfParts);

  // sum must equal value
  expect(result.reduce((a, b) => a + b, 0)).toBe(value);

  // must be sorted ascending
  expect(result).toEqual([...result].sort((a, b) => a - b));

  // max - min <= 1
  const min = Math.min(...result);
  const max = Math.max(...result);
  expect(max - min).toBeLessThanOrEqual(1);
}

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(20, 5);
  expect(result).toEqual([4, 4, 4, 4, 4]);
  checkInvariants(result, 20, 5);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(8, 1);
  expect(result).toEqual([8]);
  checkInvariants(result, 8, 1);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(17, 4);
  expect(result).toEqual([4, 4, 4, 5]);
  checkInvariants(result, 17, 4);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(3, 5);
  expect(result).toEqual([0, 0, 1, 1, 1]); // fixed expectation
  checkInvariants(result, 3, 5);
});
