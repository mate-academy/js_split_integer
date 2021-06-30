'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(typeof splitInteger()).toBe('object');
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(8, 1)).toEqual([8]);
  });

  it(`should return an array with splitted 
  into 2 integers 'num' if parts = 2`, () => {
    expect(splitInteger(6, 2)).toEqual([3, 3]);
  });

  it(`should return an array where the parts of 
  the num should be as close as possible`, () => {
    expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  });

  it(`should return an array with the integers in the ascending order`, () => {
    expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  });

  it(`should return an empty array if num = 'ten', part = 2`, () => {
    expect(splitInteger('ten', 2)).toEqual([]);
  });

  it(`should return an empty array if num = 54, part = 'four'`, () => {
    expect(splitInteger(54, 'four')).toEqual([]);
  });
});
