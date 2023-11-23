'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {

});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {

});

test('should sort parts ascending if they are not equal', () => {

});

test('should add zeros if value < numberOfParts', () => {

});

test(`the difference between the max and min number
 in the array should be <= 1`, () => {
  expect(Math.max(splitInteger(17, 4)) - Math.min(splitInteger(17, 4)) || 0)
    .toBeLessThanOrEqual(1);
});

test(`the array should be sorted ascending (from lowest to highest`, () => {
  expect(splitInteger(13, 4)).toEqual([3, 3, 3, 4]);
});
