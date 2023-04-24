'use strict';

const splitInteger = require('./splitInteger');

test(`should divide the value into equal parts if it 
is divisible by "numberOfParts" without a remainder`, () => {
  expect(splitInteger(10, 2)).toStrictEqual([5, 5]);
});

test(`should return a value when numberofParts is 1 `, () => {
  expect(splitInteger(5, 1)).toStrictEqual([5]);
});

test('should sort the elements of the array in ascending order', () => {
  expect(splitInteger(10, 3)).toStrictEqual([3, 3, 4]);
});

test('must fill in the blanks with 0 if value < numberOfParts', () => {
  expect(splitInteger(5, 6)).toStrictEqual([0, 1, 1, 1, 1, 1]);
});
