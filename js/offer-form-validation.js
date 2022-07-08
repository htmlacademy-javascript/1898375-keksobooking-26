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

//Базовая валидация на всю форму
const offerForm = document.querySelector('.ad-form');
const pristine = new Pristine(offerForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__element-text-error'
});

//Отдельная валидация полей выборы комнаты и гостей
const roomsNumber = offerForm.querySelector('#room_number');
const roomsCapacity = offerForm.querySelector('#capacity');

function validateCapacity() {
  return ROOMS_OPTION[roomsNumber.value].includes(roomsCapacity.value);
}

function getErrorMessage() {
  return 'Значение поля не соотвествует соседнему';
}

pristine.addValidator(roomsNumber, validateCapacity, getErrorMessage);
pristine.addValidator(roomsCapacity, validateCapacity, getErrorMessage);

roomsNumber.addEventListener('change', () => {
  pristine.validate(roomsCapacity);
});

roomsCapacity.addEventListener('change', () => {
  pristine.validate(roomsNumber);
});

//Привязка Тип жилья к Цена за ночь, руб.
const placementSelect = offerForm.querySelector('#type');
const priceByNight = offerForm.querySelector('#price');

placementSelect.addEventListener('change', () => {
  const selectedOption = placementSelect.value;
  priceByNight.value = '';
  priceByNight.setAttribute('min', OFFER_PRICE_BY_TYPE[selectedOption]);
  priceByNight.placeholder = `Минимум ${OFFER_PRICE_BY_TYPE[selectedOption]}`;
});

// Проверка формы при отправке
offerForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();

  if (isValid) {
    offerForm.submit();
  }

});
