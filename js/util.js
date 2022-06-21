//Получение случайного целого числа в заданном интервале, включительно.
function getRandomInt(min, max) {
  if (min >=0 && max > 0 && min !== max && max > min) {
    const minValue = Math.ceil(min);
    const maxValue = Math.floor(max);

    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }

  return null;
}

//Получение случайного числа с плавающей точкой в заданном интервале включительно, с указанным "количеством знаков после запятой".
function getRandomIntFloat(min, max, afterDecimal) {
  if (min >=0 && max > 0 && min !== max && max > min) {
    const intFloat = Math.random() * (max - min + 1) + min;

    return +intFloat.toFixed(afterDecimal);
  }

  return null;
}

//Получить случайный элемент массива
function getRandomArrayItem(array) {
  return array[getRandomInt(0, array.length - 1)];
}

//Получить массив случайной длины
function getRandomArray(array) {
  const newArray = array.slice(getRandomInt(0, array.length - 1));

  return newArray;
}

export {getRandomInt};
export {getRandomIntFloat};
export {getRandomArrayItem};
export {getRandomArray};
