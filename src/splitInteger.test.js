'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(4, 2)).toEqual([ 2, 2 ]);
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
  const array = splitInteger(1000, 3);

  const min = Math.min(...array);
  const max = Math.max(...array);

  // Calculate the difference
  const difference = max - min;

  expect(difference).toBeLessThanOrEqual(1);
});

test('The array should be sorted ascending (from lowest to highest)', () => {
  const array = splitInteger(600, 2);
  let result = false;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      expect(result).toBe(true);
    }
  }

  result = true;
  // Use the toBeSorted matcher to check if the array is sorted
  expect(result).toBe(true);
});