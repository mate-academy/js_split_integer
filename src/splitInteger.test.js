'use strict';

const splitInteger = require('./splitInteger');

test(
  `should split a number into equal parts if a
  value is divisible by a numberOfParts`,
  () => {
    const goals = splitInteger(20, 4);

    expect(goals)
      .toEqual([5, 5, 5, 5]);
  }
);

test(
  `should return a part equals to a value when splitting into 1 part`,
  () => {
    const goals = splitInteger(20, 1);

    expect(goals)
      .toEqual([20]);
  }
);

test('should sort parts ascending if they are not equal', () => {
  const goals = splitInteger(32, 6);

  expect(goals)
    .toEqual([5, 5, 5, 5, 6, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  const goals = splitInteger(2, 3);

  expect(goals)
    .toEqual([0, 1, 1]);
});
