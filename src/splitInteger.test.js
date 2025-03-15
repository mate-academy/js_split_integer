'use strict';

const splitInteger = require('./splitInteger');

test(
  'should split evenly when divisible',
  () => {
    const parts = splitInteger(8, 4);
    expect(parts).toEqual([2, 2, 2, 2]);
  }
);

test(
  'should return the original value for one part',
  () => {
    const parts = splitInteger(8, 1);
    expect(parts).toEqual([8]);
  }
);

test(
  'should split into nearly equal parts in ascending order',
  () => {
    const parts = splitInteger(17, 4);
    expect(parts).toEqual([4, 4, 4, 5]);
  }
);

test(
  'should pad with zeros if value is less than parts',
  () => {
    const parts = splitInteger(3, 4);
    expect(parts).toEqual([0, 1, 1, 1]);
  }
);
