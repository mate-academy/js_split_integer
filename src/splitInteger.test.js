'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const goals = splitInteger(17, 4);

  expect(goals).toEqual([4, 4, 4, 5]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const goals = splitInteger(9, 1);

  expect(goals)
    .toEqual([9]);
});

test('should sort parts ascending if they are not equal', () => {
  const goals = splitInteger(17, 4);
  const sort = goals.sort((a, b) => a - b);

  expect(goals)
    .toEqual(sort);
});

test('should add zeros if value < numberOfParts', () => {
  const goals = splitInteger(2, 3);

  expect(goals)
    .toEqual([0, 1, 1]);
});
