'use strict';

const splitInteger = require('./splitInteger');

test('the array should be sorted ascending from lowest to highest', () => {
  expect(splitInteger(13, 4)).toEqual([3, 3, 3, 4]);
});

test('the difference between the max and min number in the array should be <= 1', () => {
  expect(Math.max(splitInteger(17, 4)) - Math.min(splitInteger(17, 4)) || 0)
    .toBeLessThanOrEqual(1);
});
