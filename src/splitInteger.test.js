// splitInteger.test.js
// Импортируем функцию splitInteger из файла splitInteger.js
const splitInteger = require('./splitInteger');

// Первый тест: проверяет, что splitInteger(8, 1) возвращает [8]
test('SplitInteger(8, 1) should return [8]', () => {
  expect(splitInteger(8, 1)).toEqual([8]);
});
// Второй тест: проверяет, что splitInteger(6, 2) возвращает [3, 3]
test('SplitInteger(6, 2) should return [3, 3]', () => {
  expect(splitInteger(6, 2)).toEqual([3, 3]);
});
// Третий тест: проверяет, что splitInteger(17, 4) возвращает [4, 4, 4, 5]
test('SplitInteger(17, 4) should return [4, 4, 4, 5]', () => {
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
});
// Четвертый тест: проверяет, что splitInteger(32, 6) возвращает [5, 5, 5, 5, 6, 6]
test('SplitInteger(32, 6) should return [5, 5, 5, 5, 6, 6]', () => {
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});
// Пятый тест: проверяет, что splitInteger(10, 2) возвращает [5, 5]
test('SplitInteger(10, 2) should return [5, 5]', () => {
  expect(splitInteger(10, 2)).toEqual([5, 5]);
});

// Шестой тест: проверяет, что splitInteger(10, 3) возвращает [3, 3, 4]
test('SplitInteger(10, 3) should return [3, 3, 4]', () => {
  expect(splitInteger(10, 3)).toEqual([3, 3, 4]);
});

// Седьмой тест: проверяет, что splitInteger(5, 1) возвращает [5]
test('SplitInteger(5, 1) should return [5]', () => {
  expect(splitInteger(5, 1)).toEqual([5]);
});

// Восьмой тест: проверяет, что splitInteger(8, 4) возвращает [2, 2, 2, 2]
test('SplitInteger(8, 4) should return [2, 2, 2, 2]', () => {
  expect(splitInteger(8, 4)).toEqual([2, 2, 2, 2]);
});

// Девятый тест: проверяет, что splitInteger(1000, 100) возвращает массив из 100 десяток
test('SplitInteger(1000, 100) should return an array of 100 tens', () => {
  expect(splitInteger(1000, 100)).toEqual(new Array(100).fill(10));
});

// Десятый тест: проверяет, что splitInteger(7, 3) возвращает [2, 2, 3]
test('SplitInteger(7, 3) should return [2, 2, 3]', () => {
  expect(splitInteger(7, 3)).toEqual([2, 2, 3]);
});

// Одиннадцатый тест: проверяет, что splitInteger(15, 4) возвращает [3, 4, 4, 4]
test('SplitInteger(15, 4) should return [3, 4, 4, 4]', () => {
  expect(splitInteger(15, 4)).toEqual([3, 4, 4, 4]);
});