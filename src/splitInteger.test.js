'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  let actual = splitInteger(10, 2);
  let expected = [5, 5];
  expect(actual).toEqual(expected);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
    let actual = splitInteger(9, 1);
    let expected = [9];
    expect(actual).toEqual(expected);

});

test('should sort parts ascending if they are not equal', () => {
  let actual = splitInteger(10, 3);
  let expected = [3, 3, 4];
  expect(actual).toEqual(expected);

});

test('should add zeros if value < numberOfParts', () => {
  let actual = splitInteger(3, 5);
  let expected = [0, 0, 1, 1, 1];
  expect(actual).toEqual(expected);

});
