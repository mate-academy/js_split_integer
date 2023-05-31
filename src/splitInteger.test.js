'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by numberOfParts`, () => {
  const value = 10;
  const numberOfParts = 2;
  const result = splitInteger(value, numberOfParts);

  expect(result.length).toBe(numberOfParts);
  expect(result[0]).toBe(result[1]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const value = 10;
  const numberOfParts = 1;
  const result = splitInteger(value, numberOfParts);

  expect(result.length).toBe(numberOfParts);
  expect(result[0]).toBe(value);
});

test('should sort parts ascending if they are not equal', () => {
  const value = 10;
  const numberOfParts = 3;
  const result = splitInteger(value, numberOfParts);

  expect(result.length).toBe(numberOfParts);

  for (let i = 1; i < result.length; i++) {
    expect(result[i]).toBeGreaterThanOrEqual(result[i - 1]);
  }
});

test('should add zeros if value < numberOfParts', () => {
  const value = 2;
  const numberOfParts = 5;
  const result = splitInteger(value, numberOfParts);

  expect(result.length).toBe(numberOfParts);
  expect(result).toEqual(expect.arrayContaining(Array(numberOfParts).fill(0)));
});
