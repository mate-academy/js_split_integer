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
    expect(splitInteger(10, 1)).toEqual([10]);
  });

  it(`should return[10, 10, 10] if num = 30, parts = 3`, () => {
    expect(splitInteger(30, 3)).toEqual([10, 10, 10]);
  });

  it(`should return[20,20,20] if num = 60, parts = 3`, () => {
    expect(splitInteger(60, 3)).toEqual([20, 20, 20]);
  });

  it(`should return 5 elements with num = 10, parts = 5`, () => {
    expect(splitInteger(10, 5).length).toEqual(5);
  });

  it(`should return 5 elements with num = 11, parts = 5`, () => {
    expect(splitInteger(11, 5).length).toEqual(5);
  });

  it(`should return[21,22,22] if num = 65, parts = 3`, () => {
    expect(splitInteger(65, 3)).toEqual([21, 22, 22]);
  });
});
