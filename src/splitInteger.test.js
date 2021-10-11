'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger(65, 5)).toBeInstanceOf(Array);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(33, 1)).toEqual([33]);
  });

  it(`should be splitted into 5 integers if parts = 5`, () => {
    expect(splitInteger(25, 5)).toEqual([5, 5, 5, 5, 5]);
  });

  it(`should return closer numbers`, () => {
    expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  });

  it(`should be in ascending order all integers in the result array`, () => {
    expect(splitInteger(73, 5)).toEqual([14, 14, 15, 15, 15]);
  });

  it(`should be always valid all of input data in function`, () => {
    expect(splitInteger(324, 5)).toEqual([64, 65, 65, 65, 65]);
  });
});
