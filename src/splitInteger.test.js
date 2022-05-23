const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(6, 2);

  expect(result).toEqual([3, 3]);
});

test(`should return a part equals to a value when splitting into 1 part`, () => {
  const result = splitInteger(8, 1);

  expect(result).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(32, 6);

  expect(result).toEqual([5, 5, 5, 5, 6, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(4, 10);

  expect(result).toEqual([0, 0, 0, 0, 0, 0, 1, 1, 1, 1]);
});
