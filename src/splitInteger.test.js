'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(4, 2);

  expect(result).toEqual([2, 2]);

});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(8, 1);

  expect(result).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(17, 4);

  expect(result[result.length - 1]).toBeGreaterThanOrEqual(result[0]);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(1, 4);

  expect(result).toEqual([0, 0, 0, 1]);
});
