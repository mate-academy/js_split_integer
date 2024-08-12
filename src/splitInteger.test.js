'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(5, 5);

  expect(result).toEqual([1, 1, 1, 1, 1]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const value = 123;

  const result = splitInteger(value, 1);

  expect(result).toEqual([value]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(5, 2);

  for (let i = 0; i < result.length - 1; i++) {
    const currentPart = result[i];
    const nextPart = result[i + 1];

    expect(currentPart).toBeLessThanOrEqual(nextPart);
  }
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(3, 6);

  expect(result).toEqual([...result].sort());
});

test('should have difference between max and min number <= 1', () => {
  const result = splitInteger(35, 3);

  expect(Math.abs(Math.max(...result) - Math.min(...result))).toBeLessThanOrEqual(1);
});
