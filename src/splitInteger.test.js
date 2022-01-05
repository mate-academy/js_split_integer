const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(18, 3))
    .toEqual([6, 6, 6]);
});

test(`should return a part equals to a value when splitting into 1 part`, () => {
  expect(splitInteger(8, 1))
    .toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(21, 4))
    .toEqual([5, 5, 5, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 3))
    .toEqual([0, 1, 1]);
});
