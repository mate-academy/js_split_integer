// eslint-disable-next-line strict
const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if
a value is divisible by a numberOfParts`, () => {
  const splitedData = splitInteger(10, 2);

  expect(splitedData)
    .toEqual([5, 5]);
});

test(`should return a part equals to
a value when splitting into 1 part`, () => {
  const splitedData = splitInteger(10, 1);

  expect(splitedData)
    .toEqual([10]);
});

test('should sort parts ascending if they are not equal', () => {
  const splitedNumber = splitInteger(32, 6);

  expect(splitedNumber).toEqual([5, 5, 5, 5, 6, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  const splitedData = splitInteger(5, 10);

  expect(splitedData)
    .toEqual([0, 0, 0, 0, 0, 1, 1, 1, 1, 1]);
});
