'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const divisibleCases = [
    {
      value: 10,
      parts: 2,
      expected: [5, 5],
    },
    {
      value: 15,
      parts: 3,
      expected: [5, 5, 5],
    },
    {
      value: 20,
      parts: 4,
      expected: [5, 5, 5, 5],
    },
    {
      value: 25,
      parts: 5,
      expected: [5, 5, 5, 5, 5],
    },
  ];

  divisibleCases.forEach(({ value, parts, expected }) => {
    expect(splitInteger(value, parts)).toEqual(expected);
  });
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const cases = [1, 2, 3, 4, 5, 10, 20, 100];

  cases.forEach((value) => {
    expect(splitInteger(value, 1)).toEqual([value]);
  });
});

test('should sort parts ascending if they are not equal', () => {
  const cases = [
    {
      value: 10,
      parts: 3,
      expected: [3, 3, 4],
    },
    {
      value: 11,
      parts: 3,
      expected: [3, 4, 4],
    },
    {
      value: 14,
      parts: 4,
      expected: [3, 3, 4, 4],
    },
    {
      value: 17,
      parts: 4,
      expected: [4, 4, 4, 5],
    },
  ];

  cases.forEach(({ value, parts, expected }) => {
    expect(splitInteger(value, parts)).toEqual(expected);
  });
});

test('should add zeros if value < numberOfParts', () => {
  const cases = [
    {
      value: 1,
      parts: 2,
      expected: [0, 1],
    },
    {
      value: 2,
      parts: 3,
      expected: [0, 1, 1],
    },
    {
      value: 3,
      parts: 5,
      expected: [0, 0, 1, 1, 1],
    },
    {
      value: 4,
      parts: 6,
      expected: [0, 0, 1, 1, 1, 1],
    },
  ];

  cases.forEach(({ value, parts, expected }) => {
    expect(splitInteger(value, parts)).toEqual(expected);
  });
});
