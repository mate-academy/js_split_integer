const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(8, 2)).toEqual([4, 4]);
  expect(splitInteger(12, 3)).toEqual([4, 4, 4]);
  expect(splitInteger(20, 4)).toEqual([5, 5, 5, 5]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
  expect(splitInteger(15, 1)).toEqual([15]);
  expect(splitInteger(100, 1)).toEqual([100]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  expect(splitInteger(10, 3)).toEqual([3, 3, 4]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(4, 6)).toEqual([0, 0, 1, 1, 1, 1]);
  expect(splitInteger(3, 5)).toEqual([0, 0, 1, 1, 1]);
  expect(splitInteger(2, 4)).toEqual([0, 0, 1, 1]);
});
