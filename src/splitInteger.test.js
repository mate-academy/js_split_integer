'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(20, 2);

  expect(result[0]).toEqual(result[result.length - 1]);
}
);

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const value = 10;
  const result = splitInteger(value, 1);

  expect(result[0]).toEqual(value);
  expect(result.length).toEqual(1);
});

test('should sort parts ascending if they are not equal', () => {
  let result = splitInteger(16, 3);

  for (let i = 0; i < result.length - 1; i++) {
    if (result[i] > result[i + 1]) {
      result = false;
    }
  }
  expect(result).toBeTruthy();
});

test('should add zeros if value < numberOfParts', () => {
  const value = 2;
  const numberOfParts = 3;
  const result = splitInteger(value, numberOfParts);

  if (value < numberOfParts) {
    for (let i = 0; i < result.length - 1; i++) {
      (result[i] = result[i + 1]);
    }
    result[result.length - 1] = 0;
  }
  expect(result.length).toEqual(numberOfParts);
  expect(result[result.length - 1]).toEqual(0);
}

);
