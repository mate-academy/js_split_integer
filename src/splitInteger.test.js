'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger([])).toBeInstanceOf(Array);
  });

  it(`should return an array with integers`, () => {
    expect(splitInteger([1, 2, 3] === parseInt));
  });

  it(`should return "parts" elements 
    (for example, if "parts = 5", number "num" will be
    separated on 5 integers);`, () => {
    expect(splitInteger(24, 5)).toEqual([4, 5, 5, 5, 5]);
  });

  it(`should return the parts "num" as close as possible;`, () => {
    expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  });

  it(`should return array with integers 
    in the ascending order`, () => {
    expect(splitInteger(15, 6)).toEqual([2, 2, 2, 3, 3, 3]);
  });

  it(`should be always valid input to function`, () => {
    expect(splitInteger()).toBeTruthy();
  });
});
