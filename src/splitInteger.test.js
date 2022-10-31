const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
   var splitInteger = require('./splitInteger');
});

test(`should return a part equals to a value when splitting into 1 part`, () => {
  expect(splitInteger(10, 1)).toEqual([10]);
});

test('should sort parts ascending if they are not equal', () => {
    expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});

test('should add zeros if value < numberOfParts', () => {
    expect(splitInteger(2, 3)).toEqual([0, 1, 1]);
});
