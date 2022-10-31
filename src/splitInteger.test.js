const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
  const goals = splitInteger(16,2);
  expect(goals).toEqual([8,8])
});

test(`should return a part equals to a value when splitting into 1 part`, () => {
  const goals = splitInteger(10,1);
  expect(goals).toEqual([10])
});

test('should sort parts ascending if they are not equal', () => {
  const goals = splitInteger(15,4);
  expect(goals).toEqual([3,4,4,4])
});

test('should add zeros if value < numberOfParts', () => {
  const goals = splitInteger(3,4);
  expect(goals).toEqual([0,1,1,1])
});
