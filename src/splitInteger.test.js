'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const functionResult = splitInteger(8, 4);

  expect(functionResult.every(num => num === functionResult[0])).toEqual(true);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const functionResult = splitInteger(8, 3);

  expect(functionResult.sort()).toEqual(functionResult);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 3)).toEqual([0, 1, 1]);
});
