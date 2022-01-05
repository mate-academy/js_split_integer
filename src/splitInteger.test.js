'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts 
if a value is divisible by a numberOfParts`, () => {
    const result = splitInteger(6, 2);

    expect(result[0]).toBe(result[1]);
});

test(`should return a part equals to 
a value when splitting into 1 part`, () => {
    const value = 8;
    const result = splitInteger(value, 1);

    expect(result[0]).toBe(value);
});

test('should sort parts ascending if they are not equal', () => {
    const result = splitInteger(17, 4);

    for (let i = 0; i < result.length; i++) {
        if (result.length - 1 === i) {
            break;
        }
        expect(result[i + 1]).toBeGreaterThanOrEqual(result[i]);
    };
});

test('should add zeros if value < numberOfParts', () => {
    const result = splitInteger(1, 2);

    expect(result).toContain(0);
});
