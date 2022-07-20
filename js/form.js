import {pristine} from './main-form-validation.js';
import {resetMapView} from './map-settings.js';
import {sendData, createSuccessPopup, createErrorPopup} from './server-request.js';

const filterForm = document.querySelector('.map__filters');
const mainForm = document.querySelector('.ad-form');
const filterFormElements = filterForm.querySelectorAll('fieldset');
const mainFormElements = mainForm.querySelectorAll('fieldset');

function setElementActive(item) {
  item.removeAttribute('disabled');
}

function setElementDisabled(item) {
  item.setAttribute('disabled');
}

//Сделать формы на странице активными
function enableForms () {
  filterForm.classList.remove('map__filters--disabled');
  mainForm.classList.remove('ad-form--disabled');
  filterFormElements.forEach(setElementActive);
  mainFormElements.forEach(setElementActive);
}

//Сделать формы на странице неактивными
function disabledForms () {
  filterForm.classList.add('map__filters--disabled');
  mainForm.classList.add('ad-form--disabled');
  filterFormElements.forEach(setElementDisabled);
  mainFormElements.forEach(setElementDisabled);
}

//Записать координаты в поле адреса
const addressInput = document.querySelector('#address');
function writeDownAddress(address){
  addressInput.value  = `lat: ${address.lat.toFixed(5)} lng: ${address.lng.toFixed(5)}`;
}

// Обнуление формы после отправки
function resetMainForm() {
  mainForm.reset();
  resetMapView();
}

//Отключение и включение кнопки гланой формы
const submitButton = mainForm.querySelector('.ad-form__submit');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправляю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};


// Сбор данных с основной формы
function setMainFormSubmit() {
  mainForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          createSuccessPopup();
          resetMainForm();
          unblockSubmitButton();
        },
        () => {
          createErrorPopup();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
}


export {enableForms, disabledForms, writeDownAddress, setMainFormSubmit};
