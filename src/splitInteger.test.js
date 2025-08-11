'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const testArray = splitInteger(16, 4);

  expect(testArray).toEqual([4, 4, 4, 4]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const testArray = splitInteger(8, 1);

  expect(testArray).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const testArray = splitInteger(17, 4);

  expect(testArray).toEqual([4, 4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  const testArray = splitInteger(2, 5);

  expect(testArray).toEqual([0, 0, 0, 1, 1]);
});
