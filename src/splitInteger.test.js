'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger(5, 4)).toBeInstanceOf(Array);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(10, 1)).toEqual([10]);
  });

  it(`difference between parts num - should be minimal`, () => {
    expect(splitInteger(34, 3)).toEqual([11, 11, 12]);
  });

  it(`result in array should be in the ascending order`, () => {
    expect(splitInteger(7, 3)).toEqual([2, 2, 3]);
  });

  it(`should return an array wich length is equal to 'parts' value`, () => {
    expect(splitInteger(40, 4).length).toBe(4);
  });
});
