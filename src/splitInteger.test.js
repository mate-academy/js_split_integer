'use strict';

const splitInteger = require('./splitInteger');

test(`should return a part equal to a value when splitting into 1 part`, () => {
  expect(splitInteger(10, 1)).toEqual([10]);
});

test(`should split a number into equal parts if a value is divisible`, () => {
  expect(splitInteger(12, 3)).toEqual([4, 4, 4]);
});

test(`should return a part equal to a value when splitting into 1 part`, () => {
  expect(splitInteger(10, 1)).toEqual([10]);
});

test('should handle cases where parts are not equal', () => {
  expect(splitInteger(10, 3)).toEqual([3, 3, 4]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(3, 5)).toEqual([0, 0, 1, 1, 1]);
});

test('should handle case where numberOfParts is 0 ', () => {
  expect(splitInteger(5, 0)).toEqual([]);
});

test('should handle splitting a negative number', () => {
  expect(splitInteger(-10, 3)).toEqual([-4, -3, -3]);
});

test('should handle splitting zero into multiple parts', () => {
  expect(splitInteger(0, 4)).toEqual([0, 0, 0, 0]);
});

test('should handle splitting a number into a large number of parts', () => {
  expect(splitInteger(100, 25)).toEqual(Array(24).fill(4).concat(4));
});

test('should handle splitting a number into more parts than the value', () => {
  expect(splitInteger(8, 10)).toEqual([0, 0, 1, 1, 1, 1, 1, 1, 1, 1]);
});
