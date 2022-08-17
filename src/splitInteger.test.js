const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
  const spltNumber = splitInteger(6, 2);

  expect(spltNumber)
    .toEqual([3, 3]);
});

test(`should return a part equals to a value when splitting into 1 part`, () => {
  const partEquals = splitInteger(8);

  expect(partEquals)
    .toEqual([]);
});

test('should sort parts ascending if they are not equal', () => {
  const partAscending = splitInteger(21, 4);

  expect(partAscending)
    .toEqual([5, 5, 5, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  const addZero = splitInteger(2, 3);

  expect(addZero)
    .toEqual([0, 1, 1]);
});
