'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(4, 2)).toEqual([ 2, 2 ]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 5)).toEqual([ 0, 0, 0, 0, 1 ]);
});

test(`should return the difference between the max and min number 
  in the array <= 1`, () => {
  const array = splitInteger(62, 8);

  const min = Math.min(...array);
  const max = Math.max(...array);

  // Calculate the difference
  const difference = max - min;

  expect(difference).toBeLessThanOrEqual(1);
});

test('The array should be sorted ascending (from lowest to highest)', () => {
  expect(splitInteger(17, 4)).toEqual(splitInteger(17, 4).toSorted());
});
