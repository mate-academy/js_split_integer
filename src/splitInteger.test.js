'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if a value
 is divisible by  a numberOfParts`, () => {
  expect(splitInteger(16, 4)).toEqual([4, 4, 4, 4]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(4, 1).length).toEqual(1);
});

test('should return an array containing integer elements', () => {
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  // expect(splitInteger(3, 5).length).toEqual(5);
  expect(splitInteger(3, 5)).toEqual([0, 0, 1, 1, 1]);
});

test('should return an object', () => {
  expect(typeof splitInteger(8, 1)).toBe('object');
});

test('should be declared', () => {
  expect(splitInteger)
    .toBeInstanceOf(Function);
});

test('should sort parts ascending if they are not equal', () => {
  const goal = splitInteger(17, 4);

  for (let i = 0; i < 3; i++) {
    expect(goal[i] <= goal[i + 1]).toEqual(true);
  }
});
