// splitInteger.test.js

const splitInteger = require('./splitInteger');

test('SplitInteger(8, 1) should return [8]', () => {
  expect(splitInteger(8, 1)).toEqual([8]);
});

test('SplitInteger(6, 2) should return [3, 3]', () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
});

test('SplitInteger(17, 4) should return [4, 4, 4, 5]', () => {
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
});

test('SplitInteger(32, 6) should return [5, 5, 5, 5, 6, 6]', () => {
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});

test('SplitInteger(10, 2) should return [5, 5]', () => {
  expect(splitInteger(10, 2)).toEqual([5, 5]);
});

test('SplitInteger(10, 3) should return [3, 3, 4]', () => {
  expect(splitInteger(10, 3)).toEqual([3, 3, 4]);
});

test('SplitInteger(5, 1) should return [5]', () => {
  expect(splitInteger(5, 1)).toEqual([5]);
});

test('SplitInteger(8, 4) should return [2, 2, 2, 2]', () => {
  expect(splitInteger(8, 4)).toEqual([2, 2, 2, 2]);
});

test('SplitInteger(1000, 100) should return an array of 100 tens', () => {
  expect(splitInteger(1000, 100)).toEqual(new Array(100).fill(10));
});

test('SplitInteger(7, 3) should return [2, 2, 3]', () => {
  expect(splitInteger(7, 3)).toEqual([2, 2, 3]);
});

test('SplitInteger(15, 4) should return [3, 4, 4, 4]', () => {
  expect(splitInteger(15, 4)).toEqual([3, 4, 4, 4]);
});
