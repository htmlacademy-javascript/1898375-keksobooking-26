const SLICE_COUNT = 10;

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

//Получить массив определённой длины
function sliceArray(array) {
  const newArray = array.slice(0, SLICE_COUNT);

  return newArray;
}

//Проверка на нажатие клавишы ESC

function isEscKeydown(evt){
  return evt.key === 'Escape';
}

function isMouseButton(evt){
  return evt.button === 0;
}

export {getRandomInt, getRandomIntFloat, getRandomArrayItem, sliceArray, isEscKeydown, isMouseButton};
