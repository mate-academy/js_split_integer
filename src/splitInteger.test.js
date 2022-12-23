'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal`
 + `parts if a value is divisible by a numberOfParts`, () => {
  const integerArr = splitInteger(6, 2);

  expect(integerArr)
    .toEqual([3, 3]);
});

test(`should return a part equals`
  + `to a value when splitting into 1 part`, () => {
  const integerArr = splitInteger(8, 1);

  expect(integerArr)
    .toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const integerArr = splitInteger(17, 4);

  expect(integerArr)
    .toEqual([4, 4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  const integerArr = splitInteger(2, 3);

  expect(integerArr)
    .toEqual([0, 1, 1]);
});
