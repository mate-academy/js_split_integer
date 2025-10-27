'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(20, 4)).toEqual([5, 5, 5, 5]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(350, 1)).toEqual([350]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(21, 4)).toEqual([5, 5, 5, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(5, 7)).toEqual([0, 0, 1, 1, 1, 1, 1]);
});

test('The difference between the max and min number in the array '
  + 'should be <= 1', () => {
  expect(Math.max(...splitInteger(21, 4)) - Math.min(...splitInteger(21, 4)))
    .toBeLessThanOrEqual(1);
});

test.each([
  [8, 1],
  [6, 2],
  [17, 4],
  [21, 4],
  [32, 6],
  [5, 7],
])('splitInteger(%i, %i) should return an ascending '
  + 'sorted array (from lowest to highest)',
(value, parts) => {
  const result = splitInteger(value, parts);

  for (let i = 0; i < result.length - 1; i++) {
    expect(result[i]).toBeLessThanOrEqual(result[i + 1]);
  }
});

test.each([
  [8, 1, [8]],
  [6, 2, [3, 3]],
  [17, 4, [4, 4, 4, 5]],
  [32, 6, [5, 5, 5, 5, 6, 6]],
])('splitInteger(%i, %i) should return %p (test case from Exaples,'
  + ' requires precise equality)', (value, numberOfParts, expected) => {
  expect(splitInteger(value, numberOfParts)).toEqual(expected);
});
