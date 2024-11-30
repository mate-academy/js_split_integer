/* eslint-disable max-len */
'use strict';

const splitInteger = require('./splitInteger');

test('powinna podzielić liczbę na równe części, gdy wartość jest podzielna przez numberOfParts', () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
  expect(splitInteger(8, 4)).toEqual([2, 2, 2, 2]);
});

test('powinna zwrócić jedną część równą wartości, gdy dzielimy na 1 część', () => {
  expect(splitInteger(8, 1)).toEqual([8]);
});

test('powinna posortować części rosnąco, gdy części nie są równe', () => {
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});

test('powinna dodać zera, jeśli wartość jest mniejsza niż numberOfParts', () => {
  expect(splitInteger(2, 5)).toEqual([0, 0, 0, 1, 1]);
  expect(splitInteger(1, 3)).toEqual([0, 0, 1]);
});
