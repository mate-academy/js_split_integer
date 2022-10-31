'use strict';

const splitInteger = require('./splitInteger');

test(
  `should split a number into equal parts
   if a value is divisible by a numberOfParts`, () => {
    expect(splitInteger(100, 2)).toBe([50, 50]);
  }
);

test(
  `should return a part equals to a value when splitting into 1 part`, () => {
    expect(splitInteger(10, 1)).toBe([10]);
  }
);

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(17, 4)).toBe([4, 4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(3, 9)).toBe([0, 0, 0, 0, 0, 0, 1, 1, 1]);
});
