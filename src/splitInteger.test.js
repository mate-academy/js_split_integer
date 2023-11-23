'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(8, 2)).toEqual([4, 4]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {

});

test('should sort parts ascending if they are not equal', () => {

});

test('should add zeros if value < numberOfParts', () => {

});

test(`should return the difference between the max and min number 
  in the array <= 1`, () => {
  const array = splitInteger(6, 2);

  const min = Math.min(...array);
  const max = Math.max(...array);

  const difference = max - min;

  expect(difference).toBeLessThanOrEqual(1);
});

test('The array should be sorted ascending (from lowest to highest)', () => {
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});
