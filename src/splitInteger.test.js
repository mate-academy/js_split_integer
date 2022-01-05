'use strict';

const splitInteger = require('./splitInteger');

test('should be declared', () => {
  expect(splitInteger)
    .toBeInstanceOf(Function);
});

test('should return an array', () => {
  expect(splitInteger(6, 3))
    .toBeInstanceOf(Array);
});

test('should return empty array if parts or value is empty', () => {
  expect(splitInteger(6,))
    .toEqual([]);
});

test('should return empty array if part or value is string', () => {
  expect(splitInteger(6, 'string'))
    .toEqual([]);
});

test('should return array with zeros only if value is 0', () => {
  expect(splitInteger(0, 3))
    .toEqual([0, 0, 0]);
});

test('should return an epmty array if parts is 0', () => {
  expect(splitInteger(6, 0))
    .toEqual([]);
});

test('should return an epmty array if parts or value is null', () => {
  expect(splitInteger(3, null))
    .toEqual([]);
});

test(`should split a number into equal parts' 
if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(6, 2))
    .toEqual([3, 3]);
});

test(`should return a part equals to a value
 when splitting into 1 part`, () => {
  expect(splitInteger(6, 1))
    .toEqual([6]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(10, 3))
    .toEqual([3, 3, 4]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(3, 4))
    .toEqual([0, 1, 1, 1]);
});

test('should return an empty array if number of part negative number', () => {
  expect(splitInteger(4, -2))
    .toEqual([]);
});

test('should return array with negative numbers if value is negative', () => {
  expect(splitInteger(-4, 2))
    .toEqual([-2, -2]);
});
