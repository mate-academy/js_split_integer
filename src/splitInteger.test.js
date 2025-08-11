'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const [value, numberOfParts] = getRandomArgs();

  const parts = splitInteger(value, numberOfParts);
  const sumOfParts = parts.reduce((acc, part) => acc + part, 0);

  expect(parts.length).toBe(numberOfParts);
  expect(sumOfParts).toBe(value);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const [value] = getRandomArgs();
  const parts = splitInteger(value, 1);

  expect(parts[0]).toEqual(value);
});

test('should sort parts ascending if they are not equal', () => {
  const parts = splitInteger(32, 6);

  expect(parts[0]).toBeLessThan(parts[parts.length - 1]);
});

test('should add zeros if value < numberOfParts', () => {
  const parts = splitInteger(1, 2);

  expect(parts[0]).toEqual(0);
});

function getRandomArgs() {
  // Random value between 1 and 100
  const value = Math.floor(Math.random() * 1000) + 1;
  // Random value between 1 and value
  const numberOfParts = Math.floor(Math.random() * (value - 1)) + 1;

  return [value, numberOfParts];
}
