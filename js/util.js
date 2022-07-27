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

export {isEscKeydown,isMouseButton, debounce};
