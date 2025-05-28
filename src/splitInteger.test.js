// eslint-disable-next-line no-unused-vars
'use strict';
const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
expect(splitInteger(10, 5)).toEqual([2, 2, 2, 2, 2]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
expect(splitInteger(8, 1)).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
const result = splitInteger(17, 4);
const isSorted = result.every((val, i, arr) => i === 0 || arr[i -1] <= val);
expect(isSorted).toBe(true);
});

test('should add zeros if value < numberOfParts', () => {
expect(splitInteger(3, 5)).toEqual([0, 0, 1, 1, 1]);
});
