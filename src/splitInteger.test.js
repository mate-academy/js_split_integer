const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(90, 9))
    .toStrictEqual([10, 10, 10, 10, 10, 10, 10, 10, 10]);
});

test(`should return a part equals to a value when splitting into 1 part`, () => {
  expect(splitInteger(90, 1))
    .toStrictEqual([90]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(90, 11))
    .toStrictEqual([8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 9))
    .toStrictEqual([0, 0, 0, 0, 0, 0, 0, 0, 1]);
});
