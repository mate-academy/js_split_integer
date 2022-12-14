// eslint-disable-next-line strict
const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if 
a value is divisible by a numberOfParts`, () => {
  const splitedNumber = splitInteger(4, 2);

  expect(splitedNumber).toEqual([2, 2]);
});

test(`should return a part equals to 
a value when splitting into 1 part`, () => {
  const splitedNumber = splitInteger(4, 1);

  expect(splitedNumber)
    .toEqual([4]);
});

test('should sort parts ascending if they are not equal', () => {
  const splitedNumber = splitInteger(15, 4);

  expect(splitedNumber)
    .toEqual([3, 4, 4, 4]);
});

test('should add zeros if value < numberOfParts', () => {
  const splitedNumber = splitInteger(4, 5);

  expect(splitedNumber)
    .toEqual([0, 1, 1, 1, 1]);
});
