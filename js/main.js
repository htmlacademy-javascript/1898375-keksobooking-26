//Получение случайного целого числа в заданном интервале, включительно.

function getRandomIntInclusive(min, max) {
  if (min >=0 && max > 0 && min !== max && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return 'Некорректный интервал! Числа должны быть положительными. Проверьте последовательность ввода значений.';
}

//Случаные координаты с плавающей точкой из диапазона "от...до" включительно, с указанным "количеством знаков после запятой".

function getRandomIntInclusiveСoordinate(min, max, afterDecimal) {
  if (min >=0 && max > 0 && min !== max && max > min) {
    const coordinate = Math.random() * (max - min + 1) + min;
    if ( afterDecimal < 0 || afterDecimal >= 6) { // Сброс координат до точности в 111 км (целое число), если отрицательное значение или просят точность выше 1.1 м (6 и выше знаков).
      afterDecimal = 0;
      return coordinate.toFixed(afterDecimal);
    }
    return coordinate.toFixed(afterDecimal);
  }
  return 'Некорректный интервал! Интервал координат должен быть положительными. Проверьте последовательность ввода значений.';
}

getRandomIntInclusive(2,100);
getRandomIntInclusiveСoordinate(4,44,2);


