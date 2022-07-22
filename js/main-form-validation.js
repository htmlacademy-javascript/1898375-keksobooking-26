// 'Количество комнат': ['количество гостей'],
const ROOMS_OPTION = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};

const OFFER_PRICE_BY_TYPE = {
  flat: 1000,
  bungalow: 0,
  house: 5000,
  palace: 10000,
  hotel: 3000
};

const ERROR_VALIDATION_MESSAGE = 'Значение поля не соотвествует соседнему';

//Базовая валидация на всю форму
const mainForm = document.querySelector('.ad-form');
const pristine = new Pristine(mainForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__element-text-error'
});

//Отдельная валидация полей выборы комнаты и гостей
const roomsNumber = mainForm.querySelector('#room_number');
const roomsCapacity = mainForm.querySelector('#capacity');

function validateCapacity() {
  return ROOMS_OPTION[roomsNumber.value].includes(roomsCapacity.value);
}

pristine.addValidator(roomsNumber, validateCapacity, ERROR_VALIDATION_MESSAGE);
pristine.addValidator(roomsCapacity, validateCapacity, ERROR_VALIDATION_MESSAGE);

roomsNumber.addEventListener('change', () => {
  pristine.validate(roomsCapacity);
});

roomsCapacity.addEventListener('change', () => {
  pristine.validate(roomsNumber);
});

//Привязка Тип жилья к Цена за ночь, руб.
const placementSelect = mainForm.querySelector('#type');
const priceByNight = mainForm.querySelector('#price');

placementSelect.addEventListener('change', () => {
  const selectedOption = placementSelect.value;
  priceByNight.value = '';
  priceByNight.setAttribute('min', OFFER_PRICE_BY_TYPE[selectedOption]);
  priceByNight.placeholder = OFFER_PRICE_BY_TYPE[selectedOption];
});

export {pristine};
