// splitInteger.js
function splitInteger(value, numberOfParts) {
  const result = [];  // Создаем пустой массив в который будем добавлять части числа
  const baseValue = Math.floor(value / numberOfParts);   // Вычисляем базовое значение для каждой части округляя вниз
  const remainder = value % numberOfParts;   // Вычисляем остаток, который остается после равного деления

  // Заполняем массив частями числа
  for (let i = 0; i < numberOfParts; i++) {
    // Если индекс меньше остатка добавляем базовое значение + 1
    if (i < remainder) {
      result.push(baseValue + 1);
    } else {
      // Иначе добавляем только базовое значение
      result.push(baseValue);
    }
  }
// Возвращаем массив, отсортированный по возрастанию
  return result.sort((a, b) => a - b);
}
// Экспорт функции
module.exports = splitInteger;