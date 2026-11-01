'use strict';

const splitInteger = require('./splitInteger');


// Обов'язкові приклади з умови
test('should return [8] when splitting 8 into 1 part', () => {
  expect(splitInteger(8, 1)).toEqual([8]);
});

test('should split 6 into 2 equal parts', () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
});

test('should split 17 into 4 ascending parts', () => {
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
});

test('should split 32 into 6 ascending parts', () => {
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});

// Додаткові тести
test('should split a number into equal parts if divisible', () => {
  expect(splitInteger(4, 2)).toEqual([2, 2]);
});

test('should return the value when splitting into 1 part', () => {
  const value = 4;
  const numberOfParts = 1;
  const result = splitInteger(value, numberOfParts);

  expect(result.length).toBe(numberOfParts);
  expect(result[0]).toBe(value);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(5, 4)).toEqual([1, 1, 1, 2]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 4)).toEqual([0, 0, 0, 1]);
});

