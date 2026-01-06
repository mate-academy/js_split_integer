'use strict';

const splitInteger = require('./splitInteger');

describe('splitInteger', () => {
  it('should be a function', () => {
    expect(typeof splitInteger).toBe('function');
  });

  it('returns [8] when value is 8 and parts is 1', () => {
    expect(splitInteger(8, 1)).toEqual([8]);
  });

  it('returns [3, 3] when value is 6 and parts is 2', () => {
    expect(splitInteger(6, 2)).toEqual([3, 3]);
  });

  it('returns [4, 4, 4, 5] when value is 17 and parts is 4', () => {
    expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  });

  it('returns [5, 5, 5, 5, 6, 6] when value is 32 and parts is 6', () => {
    expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  });

  it('should return array of correct length', () => {
    expect(splitInteger(10, 5)).toHaveLength(5);
  });

  it('should have max difference between min and max <= 1', () => {
    const result = splitInteger(100, 6);
    const min = Math.min(...result);
    const max = Math.max(...result);

    expect(max - min).toBeLessThanOrEqual(1);
  });

  it('should be sorted ascending', () => {
    const result = splitInteger(13, 4);
    const sorted = [...result].sort((a, b) => a - b);

    expect(result).toEqual(sorted);
  });
});
