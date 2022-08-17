'use strict';

const splitInteger = require('./splitInteger');

test(`should split a value into equal parts if a value is div by arg1`, () => {
  const results = splitInteger(8, 2);

  expect(results).toEqual([4, 4]);
});

test(`should return a part equals to a value when splttng into 1 part`, () => {
  const results = splitInteger(8, 1);

  expect(results).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const results = splitInteger(32, 6);

  expect(results).toEqual([5, 5, 5, 5, 6, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  const results = splitInteger(2, 5);

  expect(results).toEqual([0, 0, 0, 1, 1]);
});
