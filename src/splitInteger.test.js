const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(8, 2)).toEqual([4, 4]);
});

test(`should return a part equals to a value when splitting into 1 part`, () => {
  expect(splitInteger(6, 1)).toEqual([6]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(6, 5)).toEqual([1, 1, 1, 1, 2]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(3, 4)).toEqual([0, 1, 1, 1]);
});
