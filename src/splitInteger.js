'use strict';

function splitInteger(value, numberOfParts) {
  const parts = [];
  let rest = value;

  for (let partsLeft = numberOfParts; partsLeft > 0; partsLeft--) {
    const part = Math.floor(rest / partsLeft);
    parts.push(part);
    rest -= part;
  }

  return parts;
}

describe('splitInteger', () => {
  test('8 na 1 część', () => {
    expect(splitInteger(8, 1)).toEqual([8]);
  });

  test('6 na 2 części', () => {
    expect(splitInteger(6, 2)).toEqual([3, 3]);
  });

  test('17 na 4 części', () => {
    expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  });

  test('32 na 6 części', () => {
    expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
  });

  test('1 na 3 części', () => {
    expect(splitInteger(1, 3)).toEqual([0, 0, 1]);
  });

  test('10 na 3 części', () => {
    const result = splitInteger(10, 3);
    expect(result.length).toBe(3);
    expect(Math.max(...result) - Math.min(...result)).toBeLessThanOrEqual(1);
    expect(result).toEqual(result.slice().sort((a, b) => a - b));
  });

  test('100 na 7 części', () => {
    const result = splitInteger(100, 7);
    expect(result.length).toBe(7);
    expect(Math.max(...result) - Math.min(...result)).toBeLessThanOrEqual(1);
    expect(result).toEqual(result.slice().sort((a, b) => a - b));
  });
});
