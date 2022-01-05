'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if 
a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(8, 4))
    .toEqual([2, 2, 2, 2]);
});

test(`should return a part equals to 
a value when splitting into 1 part`, () => {
  expect(splitInteger(5, 1))
    .toEqual([5]);
});

test('should sort parts ascending if they are not equal', () => {
  const actualResult = splitInteger(32, 5);
  const expectedResult = Array.from(actualResult).sort();

  expect(actualResult)
    .toEqual(expectedResult);
});

test('should add zeros if value < numberOfParts', () => {
  const actualResult = splitInteger(1, 3);

  expect(actualResult.includes(0))
    .toBeTruthy();
});
