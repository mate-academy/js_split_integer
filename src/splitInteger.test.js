'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test('returns correct coin combination for 1 cent', () => {
expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  })
  test ('returns correct coin combination for 6 cents', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  })
  test ('returns correct coin combination for 17 cents', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  })
  test ('returns correct coin combination for 50 cents', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  })
  test ('returns correct coin combination for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  })
  test ('returns correct coin combination for 100 cents', () => {
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
  })
  test ('returns correct coin combination for 99 cents', () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  })
});