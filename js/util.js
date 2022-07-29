const DEFAULT_DELAY = 500;

//Проверка на нажатие клавишы ESC
const isEscKeydown = (evt) => evt.key === 'Escape';

//Проверка на клик мыши
const isMouseButton = (evt) => evt.button === 0;


const setDebounce = (callback, timeoutDelay = DEFAULT_DELAY) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {isEscKeydown,isMouseButton, setDebounce};
