// 'Количество комнат': ['количество гостей'],
const ROOMS_OPTION = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};


const offerForm = document.querySelector('.ad-form');
const pristine = new Pristine(offerForm, {
  classTo: 'ad-form__label',
  errorClass: 'ad-form__label--invalid',
  successClass: 'ad-form__label--valid',
  errorTextParent: 'ad-form__label',
  errorTextClass: 'ad-form__label-text-error'
});

const roomsNumber = offerForm.querySelector('#room_number');
const roomsCapacity = offerForm.querySelector('#capacity');

function validateCapacity () {
  return ROOMS_OPTION[roomsNumber.value].includes(roomsCapacity.value);
}

function getRoomsErrorMessage () {
  return `Выбор "${roomsNumber.value}" не соотвествует количеству гостей`;
}

function getCapacityErrorMessage () {
  return `Выбор "${roomsCapacity.value}" не соотвествует количество комнат `;
}

pristine.addValidator(roomsNumber, validateCapacity,getRoomsErrorMessage);
pristine.addValidator(roomsCapacity, validateCapacity,getCapacityErrorMessage);


offerForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();

  if (isValid) {
    offerForm.submit();
  }

});
