'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = splitInteger(1, 1);

    expect(result).toBeInstanceOf(Array);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(1, 1)).toEqual([1]);
  });

  // write more tests here
  it(`should work with negativ 'num'`, () => {
    expect(splitInteger(-4, 2)).toEqual([-2, -2]);
  });

  it(`should return an empty array if the input is ()`, () => {
    expect(splitInteger()).toEqual([]);
  });

  it(`should return an empty array if the input is only 'num'`, () => {
    expect(splitInteger(1)).toEqual([]);
  });

  it(`should return an empty array if parts = 0`, () => {
    expect(splitInteger(4, 0)).toEqual([]);
  });

  it(`should return an empty array if parts is negativ`, () => {
    expect(splitInteger(4, -2)).toEqual([]);
  });

  it(`should return an array [3, 3]]`, () => {
    expect(splitInteger(6, 2)).toEqual([3, 3]);
  });

  it(`should return an array with lenth 
  equal to 'parts' if 'num' === 'parts']`, () => {
    expect(splitInteger(10, 10)).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  });
});
