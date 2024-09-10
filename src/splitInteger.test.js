'use strict';

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(17, 4))
    .toHaveLength(4);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(32, 6))
    .toEqual([5, 5, 5, 5, 6, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(17, 0))
    .toEqual([]);
});
