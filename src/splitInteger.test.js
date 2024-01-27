'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  
  expect(splitInteger(10, 5)).toEqual([2, 2, 2, 2, 2]);
  expect(splitInteger(6, 2)).toEqual([3, 3]);
  expect(splitInteger(12, 6)).toEqual([2, 2, 2, 2, 2, 2]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(10, 1)).toEqual([10]);
  expect(splitInteger(100, 1)).toEqual([100]);

});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(10, 3)).toEqual([3, 3, 4]);
  expect(splitInteger(20, 3)).toEqual([6, 7, 7]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 3)).toEqual([0, 0, 1]);
  expect(splitInteger(2, 4)).toEqual([0, 0, 1, 1]);

});
