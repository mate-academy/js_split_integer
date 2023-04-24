'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const goals = splitInteger(6, 2);

  expect(goals)
    .toStrictEqual([3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const goals = splitInteger(8, 1);

  expect(goals)
  .toStrictEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const goals = splitInteger(17, 4);

  expect(goals)
    .toStrictEqual([4, 4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  const goals = splitInteger(4, 5);

  expect(goals)
    .toStrictEqual([0, 1, 1, 1, 1]);
});
