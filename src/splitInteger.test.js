'use strict';
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(8, 2)).toContain(4, 4);
});

// eslint-disable-next-line max-len
test(`should return a part equals to a value when splitting into 1 part`, () => {
  expect(splitInteger(6, 1)).toContain(6);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(13, 3)).toContain(4, 4, 5);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(4, 6)).toContain(0);
});
