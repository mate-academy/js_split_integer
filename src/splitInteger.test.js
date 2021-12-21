const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
  const actual = splitInteger(6, 2);

  expect(actual)
    .toEqual([3, 3]);
});

test(`should return a part equals to a value when splitting into 1 part`, () => {
  const actual = splitInteger(8, 1);

  expect(actual)
    .toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const actual = splitInteger(18, 5);

  expect(actual)
    .toEqual([3, 3, 4, 4, 4]);
});

test('should add zeros if value < numberOfParts', () => {
  const actual = splitInteger(2, 4);

  expect(actual)
    .toEqual([0, 0, 1, 1]);
});
