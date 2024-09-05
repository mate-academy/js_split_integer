'use strict';

const splitInteger = require('./splitInteger');

describe('splitInteger', () => {
  test('should return [8] when value is 8 and numberOfParts is 1', () => {
    expect(splitInteger(8, 1)).toEqual([8]);
  });

  test('should return [3, 3] when value is 6 and numberOfParts is 2', () => {
    expect(splitInteger(6, 2)).toEqual([3, 3]);
  });

  test(
    'should return [4, 4, 4, 5] when value is 17 and numberOfParts is 4',
    () => {
      expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
    }
  );

  test(
    'should return [5, 5, 5, 5, 6, 6] when value is 32 and numberOfParts is 6',
    () => {
      expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
    }
  );

  test(
    'should return array with zeros when value is less than numberOfParts',
    () => {
      expect(splitInteger(2, 5)).toEqual([0, 0, 0, 1, 1]);
      expect(splitInteger(3, 6)).toEqual([0, 0, 0, 1, 1, 1]);
      expect(splitInteger(0, 4)).toEqual([0, 0, 0, 0]);
    }
  );
});
