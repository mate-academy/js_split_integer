const splitInteger = require('./splitInteger');

describe('splitInteger', () => {
  test('returns [8] when value is 8 and numberOfParts is 1', () => {
    expect(splitInteger(8, 1)).toEqual([8]);
  });

  test('splits 6 into 2 equal parts', () => {
    expect(splitInteger(6, 2)).toEqual([3, 3]);
  });

  test('splits 17 into 4 parts with min/max diff <= 1', () => {
    expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  });

  test('splits 32 into 6 parts with min/max diff <= 1', () => {
    expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  });
});
