const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
  const goals = splitInteger(6, 2);

  expect(goals).toEqual([3, 3]);
});

test(`should return a part equals to a value when splitting into 1 part`, () => {
  const singlePartValue = 8;
  const goals = splitInteger(singlePartValue, 1);

  expect(goals[0]).toBe(singlePartValue);
});

test('should sort parts ascending if they are not equal', () => {
  const goals = splitInteger(33, 6);

  expect(goals).toEqual([5, 5, 5, 6, 6, 6]);
});

test('should add zeros if value < numberOfParts', () => {
  const goals = splitInteger(2, 6);

  expect(goals).toEqual([0, 0, 0, 0, 1, 1]);
});
