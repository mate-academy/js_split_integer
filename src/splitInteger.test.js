'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger()).toBeInstanceOf(Array);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(8, 1)).toEqual([8]);
  });

  it(`should return 5 elements with num = 10, parts = 5`, () => {
    expect(splitInteger(10, 5).length).toEqual(5);
  });

  it(`the parts of the num should be as close as possible`, () => {
    expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  });

  it(`the integers in the result array should be in the ascending order`, () => {
    expect(splitInteger(18, 4)).toEqual([4, 4, 5, 5]);
  });

  it(`should return [20, 20, 20] if num = 60, parts = 3`, () => {
    expect(splitInteger(60, 3)).toEqual([20, 20, 20]);
  });
});
