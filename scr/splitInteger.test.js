'use strict';

const { splitInteger } = require('./splitInteger');
// const { parts } = require('./splitInteger');

test(`should split a number into equal parts if a value
 is divisible by  a numberOfParts`, () => {
  
  expect(splitInteger(16, 4)).toEqual([4, 4, 4, 4]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const mas = [4];

  expect(splitInteger(4, 1).length).toEqual(mas.length);
});

test('should sort parts ascending if they are not equal', () => {
  const numberOfParts = 4;
  const value = 17;
  const goal = splitInteger(value, numberOfParts);
  let count = 1;

  for (let i = 0; i < numberOfParts - 1; i++) {
    if (goal[i] <= goal[i + 1]) {
      count++;
    }
  }
  expect(numberOfParts).toEqual(count);
});

test('should add zeros if value < numberOfParts', () => {
  const numberOfParts = 4;
  const value = 3;

  expect(value).toBeLessThan(numberOfParts);
});
