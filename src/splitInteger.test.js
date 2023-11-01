'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(6, 2);
  const expected = 3;

  for (let i = 0; i < result.length; i++) {
    expect(result[i]).toBe(expected);
  }

  expect(result.length).toBe(2);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(10, 1);
  const expectedSize = 1;
  const expected = 10;

  expect(result.length).toBe(expectedSize);

  expect(result[0]).toBe(expected);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(17, 4);

  for (let i = 0; i < result.length - 1; i++) {
    expect(result[i]).toBeLessThanOrEqual(result[i + 1]);
  }
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(2, 5);
  const expected = 0;

  for (let i = 0; i < 3; i++) {
    expect(result[i]).toBe(expected);
  }
});
