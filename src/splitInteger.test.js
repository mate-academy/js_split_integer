'use strict';

const splitInteger = require('./splitInteger');

test(`should return an array of length 1 number`
  + `if 'numberOfParts' = 1`, () => {
  expect(splitInteger(10, 1)).toEqual([10]);
});

test(`should return an array of length 2 number`
  + `if 'numberOfParts' = 2`, () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
});

test(`should return an array of length 4 number`
  + `if 'numberOfParts' = 4`, () => {
  expect(splitInteger(34, 4)).toEqual([8, 8, 9, 9]);
});

test(`should return an array of length 6 number`
  + `if 'numberOfParts' = 6`, () => {
  expect(splitInteger(26, 6)).toEqual([4, 4, 4, 4, 5, 5]);
});

test(`should return 15 if 'numberOfParts' = 1`, () => {
  expect(splitInteger(15, 1)).toEqual([15]);
});

test(`should return 28 if 'numberOfParts' = 1`, () => {
  expect(splitInteger(28, 1)).toEqual([28]);
});

test(`should return 7 if 'numberOfParts' = 1`, () => {
  expect(splitInteger(7, 1)).toEqual([7]);
});

test(`should sort parts ascending and return [4, 5, 5]`
+ `if value = 14 and numberOfParts = 3`, () => {
  expect(splitInteger(14, 3)).toEqual([4, 5, 5]);
});

test(`should sort parts ascending and return [5, 6, 6, 6]`
+ `if value = 23 and numberOfParts = 4`, () => {
  expect(splitInteger(23, 4)).toEqual([5, 6, 6, 6]);
});

test(`should sort parts ascending and return [6, 6, 6, 7, 7]`
+ `if value = 32 and numberOfParts = 5`, () => {
  expect(splitInteger(32, 5)).toEqual([6, 6, 6, 7, 7]);
});

test(`should add three zeros if value < numberOfParts`
+ `and return [0, 0, 0, 1, 1] if value = 2 and numberOfParts = 5`, () => {
  expect(splitInteger(2, 5)).toEqual([0, 0, 0, 1, 1]);
});

test(`should add five zeros if value < numberOfParts`
+ `and return [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]`
+ `if value = 5 and numberOfParts = 10`, () => {
  expect(splitInteger(5, 10)).toEqual([0, 0, 0, 0, 0, 1, 1, 1, 1, 1]);
});

test(`should add two zeros if value < numberOfParts`
+ `and return [0, 0, 1, 1, 1, 1, 1, 1]`
+ `if value = 6 and numberOfParts = 8`, () => {
  expect(splitInteger(6, 8)).toEqual([0, 0, 1, 1, 1, 1, 1, 1]);
});
