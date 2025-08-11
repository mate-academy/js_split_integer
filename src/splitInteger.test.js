'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const value = 1000;
  const numberOfParts = 500;
  const expectedElementValue = value / numberOfParts;
  const result = splitInteger(value, numberOfParts);

  expect(result.length).toBe(numberOfParts);

  for (const element of result) {
    expect(element).toBe(expectedElementValue);
  }
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const value = 55;
  const numberOfParts = 1;
  const result = splitInteger(value, numberOfParts);

  expect(result).toStrictEqual([value]);
});

test('should sort parts ascending if they are not equal', () => {
  const value = 9;
  const numberOfParts = 7;
  const result = splitInteger(value, numberOfParts);

  expect(result.length).toBe(numberOfParts);

  for (let i = 0; i < result.length - 1; i++) {
    const delta = result[i + 1] - result[i];
    const isAscending = delta === 0 || delta === 1;

    expect(isAscending).toBe(true);
  }
});

test('should add zeros if value < numberOfParts', () => {
  const value = 10;
  const numberOfParts = 100;
  const result = splitInteger(value, numberOfParts);
  const threshold = result.length - value;

  for (let i = 0; i < result.length; i++) {
    if (i < threshold) {
      expect(result[i]).toBe(0);
    } else {
      expect(result[i]).toBe(1);
    }
  }
});
