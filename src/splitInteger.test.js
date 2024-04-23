'use strict';

const splitInteger = require('./splitInteger');

// test(`should split a number into equal parts
//   if a value is divisible by a numberOfParts`, () => {
//   expect(splitInteger(10, 2)).toEqual([5, 5]);
// });

// test(`should return a part equals to a value
//   when splitting into 1 part`, () => {
//   expect(splitInteger(8, 1)).toEqual([8]);
// });

// test('should sort parts ascending if they are not equal', () => {
//   const result = splitInteger(10, 4);
//   const expected = [2, 2, 3, 3];

//   expect(result).toEqual(expected);
// });

// test('should add zeros if value < numberOfParts', () => {
//   expect(splitInteger(1, 2)).toEqual([0, 1]);
// });

test(`the difference between the max and min number
 in the array should be <= 1`, () => {
  const result = splitInteger(10, 7);
  const equalOrLessOne = result[0] - result[result.length - 1] <= 1;

  expect(equalOrLessOne).toEqual(true);
});

test('the array should be sorted ascending (from lowest to highest)', () => {
  const result = splitInteger(10, 3);
  let isSorted = true;

  for (let i = 0; i < result.length - 1; i++) {
    if (result[i] > result[i + 1]) {
      isSorted = false;
      break;
    }
  }

  expect(isSorted).toBe(true);
});
