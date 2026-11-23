'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(6, 2);

  expect(result[0]).toBe(result[1]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(8, 1);

  expect(result).toEquel([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(17, 4);

  const expectedSorted = [...result].sort((a, b) => a - b);

  expect(result).toEquel(expectedSorted);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(4, 5);

  expect(result).toEquel([0, 0, 0, 0, 0]);
});
