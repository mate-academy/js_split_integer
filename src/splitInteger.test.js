// eslint-disable-next-line strict
const splitInteger = require('./splitInteger');

it(`should split a number into equal parts if a 
value is divisible by a numberOfParts`, () => {
  expect(splitInteger(4, 2)).toEqual([2, 2]);
});

it(`should return a part equals to a value when splitting into 1 part`, () => {
  expect(splitInteger(1, 1)).toEqual([1]);
});

it('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(9, 8)).toEqual([1, 1, 1, 1, 1, 1, 1, 2]);
});

it('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(3, 4)).toEqual([0, 1, 1, 1]);
});
