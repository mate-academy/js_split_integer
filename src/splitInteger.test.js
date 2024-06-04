'use strict';

const { splitInteger } = require('./splitInteger');

describe(`'splitInteger' should`, () => {
  test(`return an array`, () => {
    const result = splitInteger(12, 5);

    expect(result).toBeInstanceOf(Array);
  });

  test(`split a number into equal parts
    if a value is divisible by a numberOfParts`, () => {
    const result = splitInteger(12, 5);

    expect(result).toEqual([2, 2, 2, 3, 3]);
  });

  test(`return a part equals to a value
    when splitting into 1 part`, () => {
    const result = splitInteger(5, 1);

    expect(result).toEqual([5]);
  });

  test('sort parts ascending if they are not equal', () => {
    const result = splitInteger(13, 5);

    expect(result).toEqual([2, 2, 3, 3, 3]);
  });

  test('add zeros if value < numberOfParts', () => {
    const result = splitInteger(2, 5);

    expect(result).toEqual([0, 0, 0, 1, 1]);
  });
});
