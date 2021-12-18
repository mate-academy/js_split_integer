const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
  const actual = splitInteger(6, 2);

  expect(actual)
    .toStrictEqual([3, 3]);
});

test(`should return a part equals to a value when splitting into 1 part`, () => {
  const actual = splitInteger(6, 1);

  expect(actual)
    .toStrictEqual([6]);
});

test('should sort parts ascending if they are not equal', () => {
  const actual = splitInteger(17, 4);

  expect(actual)
    .toStrictEqual([4, 4, 4, 5]);
});

test('should add zeros if value < numberOfParts', () => {
  const actual = splitInteger(1, 3);

  expect(actual)
    .toStrictEqual([0, 0, 1]);
});
