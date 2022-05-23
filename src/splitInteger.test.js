const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(4, 2))
    .toStrictEqual([2, 2]);
});

test(`should return a part equals to a value when splitting into 1 part`, () => {
  expect(splitInteger(12345, 1))
    .toStrictEqual([12345]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(43, 3))
    .toStrictEqual([14, 14, 15]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(2, 5))
    .toStrictEqual([0, 0, 0, 1, 1]);
});
