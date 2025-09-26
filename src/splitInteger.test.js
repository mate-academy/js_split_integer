'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const res = splitInteger(8, 4);

  expect(res).toEqual([2, 2, 2, 2]);
  expect(res).toHaveLength(4);
  expect(res.reduce((a, b) => a + b, 0)).toBe(8);
  expect(res.every(Number.isInteger)).toBe(true);
  expect(res).toEqual(res.slice().sort((a, b) => a - b));
  expect(Math.max(...res) - Math.min(...res)).toBeLessThanOrEqual(1);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const res = splitInteger(8, 1);

  expect(res).toEqual([8]);
  expect(res).toHaveLength(1);
  expect(res.reduce((a, b) => a + b, 0)).toBe(8);
  expect(res.every(Number.isInteger)).toBe(true);
  expect(res).toEqual(res.slice().sort((a, b) => a - b));
  expect(Math.max(...res) - Math.min(...res)).toBeLessThanOrEqual(1);
});

test('should sort parts ascending if they are not equal', () => {
  const res = splitInteger(10, 3);

  expect(res).toEqual([3, 3, 4]);
  expect(res).toHaveLength(3);
  expect(res.reduce((a, b) => a + b, 0)).toBe(10);
  expect(res.every(Number.isInteger)).toBe(true);
  expect(res).toEqual(res.slice().sort((a, b) => a - b));
  expect(Math.max(...res) - Math.min(...res)).toBeLessThanOrEqual(1);
});

test('should add zeros if value < numberOfParts', () => {
  const res = splitInteger(3, 5);

  expect(res).toEqual([0, 0, 1, 1, 1]);
  expect(res).toHaveLength(5);
  expect(res.reduce((a, b) => a + b, 0)).toBe(3);
  expect(res.every(Number.isInteger)).toBe(true);
  expect(res).toEqual(res.slice().sort((a, b) => a - b));
  expect(Math.max(...res) - Math.min(...res)).toBeLessThanOrEqual(1);
});

// 🔹 Додаткові приклади з опису завдання
test('should split 6 into 2 equal parts', () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
});

test('should split 17 into 4 nearly equal parts', () => {
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
});

test('should split 32 into 6 nearly equal parts', () => {
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});

test('should split when value equals numberOfParts', () => {
  expect(splitInteger(5, 5)).toEqual([1, 1, 1, 1, 1]);
});
