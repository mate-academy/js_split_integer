'use strict';

const splitInteger = require('./splitInteger');

test('splitInteger(8, 1) should return [8]', () => {
  expect(splitInteger(8, 1)).toEqual([8]);
});

test('splitInteger(6, 2) should return [3, 3]', () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
});

test('splitInteger(17, 4) should return [4, 4, 4, 5]', () => {
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
});

test('splitInteger(32, 6) should return [5, 5, 5, 5, 6, 6]', () => {
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});
