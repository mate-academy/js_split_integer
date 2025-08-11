'use strict';

const splitInteger = require('../src/splitInteger.js');

describe('splitInteger', () => {
  test(
    'should return array with single element when numberOfParts is 1',
    () => {
      expect(splitInteger(8, 1)).toEqual([8]);
    }
  );

  test(
    'should return equal parts when value is evenly divisible',
    () => {
      expect(splitInteger(6, 2)).toEqual([3, 3]);
    }
  );

  test(
    'should return parts with difference <= 1 and sorted ascending',
    () => {
      expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
    }
  );

  test(
    'splitInteger(32, 6) returns correct array',
    () => {
      expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
    }
  );
});
