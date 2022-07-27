const SLICE_COUNT = 10;

//Получение случайного целого числа в заданном интервале, включительно.
const getRandomInt = (min, max) => {
  if (min >=0 && max > 0 && min !== max && max > min) {
    const minValue = Math.ceil(min);
    const maxValue = Math.floor(max);

    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }

  return null;
};

//Получение случайного числа с плавающей точкой в заданном интервале включительно, с указанным "количеством знаков после запятой".
const getRandomIntFloat = (min, max, afterDecimal) => {
  if (min >=0 && max > 0 && min !== max && max > min) {
    const intFloat = Math.random() * (max - min + 1) + min;

    return +intFloat.toFixed(afterDecimal);
  }

  return null;
};

//Получить случайный элемент массива
const getRandomArrayItem = (array) => array[getRandomInt(0, array.length - 1)];

//Получить массив определённой длины
const getMaxAds = (array) => array.slice(0, SLICE_COUNT);


//Проверка на нажатие клавишы ESC
const isEscKeydown = (evt) => evt.key === 'Escape';

//Проверка на клик мыши
const isMouseButton = (evt) => evt.button === 0;


const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {getRandomInt, getRandomIntFloat, getRandomArrayItem, getMaxAds, isEscKeydown,isMouseButton, debounce};
