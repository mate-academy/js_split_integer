'use strict';

const splitInteger = require('./splitInteger');

const assertSplitProperties = (parts, value, numberOfParts) => {
  // 1️⃣ długość tablicy
  expect(parts).toHaveLength(numberOfParts);

  // 2️⃣ wszystkie elementy to liczby całkowite
  expect(parts.every(Number.isInteger)).toBe(true);

  // 3️⃣ posortowane rosnąco
  expect(parts).toEqual([...parts].sort((a, b) => a - b));

  // 4️⃣ różnica między max a min <= 1
  const diff = Math.max(...parts) - Math.min(...parts);

  expect(diff).toBeLessThanOrEqual(1);

  // 5️⃣ suma wszystkich elementów równa wartości wejściowej
  const sum = parts.reduce((s, x) => s + x, 0);

  expect(sum).toBe(value);
};

test(`should split a number into equal parts 
  if value is divisible by numberOfParts`, () => {
  const value = 10;
  const numberOfParts = 5;
  const parts = splitInteger(value, numberOfParts);

  expect(parts).toEqual([2, 2, 2, 2, 2]);
  assertSplitProperties(parts, value, numberOfParts);
});

test('should return a part equal to value when splitting into 1 part', () => {
  const value = 7;
  const numberOfParts = 1;
  const parts = splitInteger(value, numberOfParts);

  expect(parts).toEqual([7]);
  assertSplitProperties(parts, value, numberOfParts);
});

test('should sort parts ascending if they are not equal', () => {
  const value = 10;
  const numberOfParts = 3;
  const parts = splitInteger(value, numberOfParts);

  expect(parts).toEqual([3, 3, 4]);
  assertSplitProperties(parts, value, numberOfParts);
});

test('should add zeros if value < numberOfParts', () => {
  const value = 2;
  const numberOfParts = 3;
  const parts = splitInteger(value, numberOfParts);

  expect(parts).toEqual([0, 1, 1]);
  assertSplitProperties(parts, value, numberOfParts);
});
