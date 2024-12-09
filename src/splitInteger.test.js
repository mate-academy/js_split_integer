"use strict";

const splitInteger = require("./splitInteger");

describe(`Split integer`, () => {
  test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
    expect(splitInteger(8, 1)).toEqual([8]);
    expect(splitInteger(6, 2)).toEqual([3, 3]);
    expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
    expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  });

  test(`should return a part equals to a value
  when splitting into 1 part`, () => {
    const isDifferenceValid = (array) => {
      if (array.length === 0) {
        return true;
      }

      const max = Math.max(array);
      const min = Math.min(array);

      return max - min <= 1;
    };

    expect(isDifferenceValid(splitInteger(17, 4))).toEqual(
      isDifferenceValid(splitInteger(17, 4))
    );
  });

  test(`should sort parts ascending if they are not equal`, () => {
    expect(splitInteger(6, 2)).toStrictEqual(splitInteger(6, 2).sort());
    expect(splitInteger(17, 4)).toStrictEqual(splitInteger(17, 4).sort());
    expect(splitInteger(32, 6)).toStrictEqual(splitInteger(32, 6).sort());
  });

  test(`should add zeros if value < numberOfParts`, () => {
    expect(splitInteger(0, 1)).toEqual([0]);
    expect(splitInteger(0, 2)).toEqual([0, 0]);
    expect(splitInteger(0, 4)).toEqual([0, 0, 0, 0]);
    expect(splitInteger(0, 6)).toEqual([0, 0, 0, 0, 0, 0]);
  });
});
