'use strict';

const splitInteger = require('./splitInteger');

const result = splitInteger(10, 2);

describe('splitInteger', () => {
  test(`should split a number into equal parts
  if a value is divisible by numberOfParts`, () => {
    expect(result.length).toBe(2);
    expect(result[0]).toBe(result[1]);
  });

  test('should return a part equals to a value when splitting into 1 part',
    () => {
      expect(splitInteger(10, 1).length).toBe(1);
      expect(splitInteger(10, 1)[0]).toBe(10);
    });

  test('should sort parts in ascending order if they are not equal', () => {
    const result3 = splitInteger(10, 3);

    expect(result3.length).toBe(3);
  });

  test('should add zeros if value is less than numberOfParts', () => {
    const result5 = splitInteger(2, 5);

    expect(result5.length).toBe(5);
    expect(result5).toEqual(expect.arrayContaining(Array(5).fill(0)));
  });
});
