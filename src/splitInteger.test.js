const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(9, 3);

  expect(result).toEqual([3, 3, 3]);
});

test(`should return a part equals to a value when splitting into 1 part`, () => {
  const result = splitInteger(9, 1);

  expect(result).toEqual([9]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(10, 3);

  expect(result).toEqual([3, 3, 4]);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(2, 3);

  expect(result).toEqual([0, 1, 1]);
});

test('should add only one if value = numberOfParts', () => {
  const result = splitInteger(3, 3);

  expect(result).toEqual([1, 1, 1]);
});
