const splitInteger = require('./splitInteger');

test('Should test common cases', () => {
    let ans = splitInteger(8, 1);
    expect(ans).toEqual([8]);

    ans = splitInteger(6, 2);
    expect(ans).toEqual([3, 3]);

    ans = splitInteger(17, 4);
    expect(ans).toEqual([4, 4, 4, 5]);

    ans = splitInteger(32, 6);
    expect(ans).toEqual([5, 5, 5, 5, 6, 6]);
});

test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
    expect(splitInteger(9, 3)).toEqual([3, 3, 3]);
});

test(`should return a part equals to a value when splitting into 1 part`, () => {
    expect(splitInteger(12, 1)).toEqual([12]);
});

test('should sort parts ascending if they are not equal', () => {
    expect(splitInteger(10, 4)).toEqual([2, 2, 3, 3]);
});

test('should add zeros if value < numberOfParts', () => {
    expect(splitInteger(9, 10)).toEqual([0, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
});
