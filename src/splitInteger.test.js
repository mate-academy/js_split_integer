'use strict';

describe(`Function 'splitInteger':`, () => {
  const splitInteger = require('./splitInteger');

  it(`should be declared`, () => {
    expect(splitInteger).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(splitInteger(8, 1)).toBeInstanceOf(Array);
  });

  it(`should return an array with 'num' if parts = 1`, () => {
    expect(splitInteger(8, 1)).toEqual([8]);
  });

  it(`should return an array with 'num' if parts = 5`, () => {
    expect(splitInteger(32, 5).length).toBe(5);
  });

  it(`should return an integer array`, () => {
    const result = splitInteger(17, 3); // [5, 6, 6]

    expect(Number.isInteger(result[0])).toBe(true);
    expect(Number.isInteger(result[1])).toBe(true);
    expect(Number.isInteger(result[2])).toBe(true);
  });

  it(`should return an array as close as possible`, () => {
    const result = splitInteger(10, 3); // [3, 3, 4]

    expect(result[1] - result[0]).toBeLessThanOrEqual(1);
    expect(result[2] - result[1]).toBeLessThanOrEqual(1);
  });

  it(`should return an array in the ascending order`, () => {
    const result = splitInteger(10, 3); // [3, 3, 4]

    expect(result[0]).toBeLessThanOrEqual(result[1]);
    expect(result[1]).toBeLessThanOrEqual(result[2]);
  });
});
