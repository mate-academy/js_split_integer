'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(6, 2);

  expect(result[0]).toEqual(result[result.length - 1]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(8, 1);
  const expectedLength = 1;

  expect(result.length).toBe(expectedLength);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(32, 6);

  expect(result[0]).toBeLessThan(result[result.length - 1]);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(8, 0);

  expect(result.length).toBeFalsy();
});
