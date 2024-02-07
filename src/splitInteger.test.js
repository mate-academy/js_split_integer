'use strict';

const splitInteger = require('./splitInteger');

it(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(2, 2)).toEqual([1, 1]);
});

it(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(10)).to.deep.equal([10]);
});

it('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(15, 15, 15)).to.deep.equal([5, 5, 5]);
});

it('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(20, 20, 20, 20)).to.deep.equal([0, 0, 1, 1, 1]);
});
