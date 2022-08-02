'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal
parts if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(56, 7)).toEqual([8, 8, 8, 8, 8, 8, 8]);
});

test(`should return a part equals to a value when splitting into 1 part`,
  () => {
    expect(splitInteger(56, 1)).toEqual([56]);
  });

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(57, 7)).toEqual([8, 8, 8, 8, 8, 8, 9]);
});
