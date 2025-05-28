'use strict';

function getHumanAge(catAge, dogAge) {
  function convert(age, first, second, every) {
    if (age < first) {
      return 0;
    }

    if (age < first + second) {
      return 1;
    }

    return 2 + Math.floor((age - first - second) / every);
  }

  const catHuman = convert(catAge, 15, 9, 4);
  const dogHuman = convert(dogAge, 15, 9, 5);

  return [catHuman, dogHuman];
}

module.exports = getHumanAge;
