const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
  const splitedNumber = splitInteger(6, 2);

  expect(splitedNumber).toEqual([3, 3]);
});

test(`should return a part equals to a value when splitting into 1 part`, () => {
  const splitedNumber = splitInteger(8, 1);

  expect(splitedNumber).toEqual([8]);
});

test('should sort parts ascending if they are not equal', () => {
  const splitedNumber = splitInteger(32, 6);

  expect(splitedNumber).toEqual([5, 5, 5, 5, 6, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  const splitedNumber = splitInteger(2, 3);

  expect(splitedNumber).toEqual([0, 1, 1]);
});
