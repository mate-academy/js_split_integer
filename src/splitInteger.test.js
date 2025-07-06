'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {

const result = splitInteger(30, 3);
expect(result).toEqual([10, 10, 10]);
    
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
const result = splitInteger(30, 1);
expect(result).toEqual([30])
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(42, 4); 
  expect(result).toEqual([10, 10, 11, 11]);

});

test('should add zeros if value < numberOfParts', () => {
const result = splitInteger(2, 4);
expect(result).toEqual([0, 0, 1, 1]); //hi 

});
