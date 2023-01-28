'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const parts = splitInteger(8, 2);

  expect(parts).toHaveLength(2);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const parts = splitInteger(8, 1);

  expect(parts).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const parts = splitInteger(13, 4);

  expect(parts[0]).toBeLessThan(parts[3]);
});

test('should add zeros if value < numberOfParts', () => {
  const parts = splitInteger(2, 3);

  expect(parts).toContain(0);
});
