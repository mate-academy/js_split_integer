const splitInteger = require('./splitInteger.js');

test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(10, 2)).toEqual([5, 5]);
});

test(`should return a part equals to a value when splitting into 1 part`, () => {
  expect(splitInteger(1, 1)).toEqual([1]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(15, 4)).toEqual([3, 4, 4, 4]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(3, 4)).toEqual([0, 1, 1, 1]);
});
