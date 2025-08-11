'use strict';

const splitInteger = require('./splitInteger');

describe(`splitInteger`, () => {
  it(`should split divisible values into equal parts`, () => {
    expect(splitInteger(8, 2))
      .toEqual([4, 4]);
  });

  it(`should return a value itself when splitting into 1 part`, () => {
    expect(splitInteger(8, 1))
      .toEqual([8]);
  });

  it('should sort parts ascending if they are not equal', () => {
    expect(splitInteger(7, 3))
      .toEqual([2, 2, 3]);
  });

  it('should add zeros if value < numberOfParts', () => {
    expect(splitInteger(2, 5))
      .toEqual([0, 0, 0, 1, 1]);
  });
});
