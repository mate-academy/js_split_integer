const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
});

test(`should return a part equals to a value when splitting into 1 part`, () => {
  expect(splitInteger(6, 1)).toEqual([6]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(5, 2)).toEqual([2, 3]);
  expect(splitInteger(7, 3)).toEqual([2, 2, 3]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 2)).toEqual([0, 1]);
});
