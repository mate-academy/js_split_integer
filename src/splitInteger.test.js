'use strict';

const splitInteger = require('./splitInteger');

const testCases = [
  {
    description: 'should split a number into equal parts if a value is divisible by a numberOfParts',
    value: 6,
    numberOfParts: 2,
    expected: [3, 3],
  },
  {
    description: 'should return a part equals to a value when splitting into 1 part',
    value: 8,
    numberOfParts: 1,
    expected: [8],
  },
  {
    description: 'should sort parts ascending if they are not equal',
    value: 17,
    numberOfParts: 4,
    expected: [4, 4, 4, 5],
  },
  {
    description: 'should sort parts ascending if they are not equal',
    value: 32,
    numberOfParts: 6,
    expected: [5, 5, 5, 5, 6, 6],
  },
  {
    description: 'should add zeros if value < numberOfParts',
    value: 2,
    numberOfParts: 5,
    expected: [0, 0, 0, 1, 1],
  },
];

testCases.forEach(({ description, value, numberOfParts, expected }) => {
  test(description, () => {
    expect(splitInteger(value, numberOfParts)).toEqual(expected);
  })
});
