const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
  const goals = splitInteger(8, 4);

  expect(goals).toEqual([2, 2, 2, 2])
});

test(`should return a part equals to a value when splitting into 1 part`, () => {
  const goals = splitInteger(5, 1);

  expect(goals).toEqual([5])
});

test('should sort parts ascending if they are not equal', () => {
  const goals = splitInteger(5, 3);

  expect(goals).toEqual([1, 2, 2])
});

test('should add zeros if value < numberOfParts', () => {
  const goals = splitInteger(6, 7);

  expect(goals).toEqual([0, 1, 1, 1, 1, 1, 1])
});
