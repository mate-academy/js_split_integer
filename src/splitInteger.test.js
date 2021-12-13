'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal 3 if a 6 is divisible by a 2`, () => {
  expect(splitInteger(6, 2)).toStrictEqual([3, 3]);
});

test(`should return a part equals to a 8 when splitting into 1 part`, () => {
  expect(splitInteger(8, 1)).toStrictEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(17, 4)).toStrictEqual([4, 4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(4, 2)).toStrictEqual([2, 2]);
});
