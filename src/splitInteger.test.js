'use strict';

const splitInteger = require('./splitInteger');

describe('lal', () => {
  it(`should split a number into equal parts if a value is divisible
  by a numberOfParts`, () => {
    expect(splitInteger(10, 2))
      .toEqual([5, 5]);
  });

  it(`should return a part equals to a value when splitting into
  1 part`, () => {
    expect(splitInteger(4, 1))
      .toEqual([4]);
  });

  it('should sort parts ascending if they are not equal', () => {
    expect(splitInteger(13, 4))
      .toEqual([3, 3, 3, 4]);
  });

  it('should add zeros if value < numberOfParts', () => {
    expect(splitInteger(1, 2))
      .toEqual([0, 1]);
  });
});

it(`i don't know but is is good`, () => {
  expect(splitInteger(6, 2))
    .toEqual([3, 3]);
});
