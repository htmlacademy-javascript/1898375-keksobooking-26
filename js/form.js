import {pristine} from './main-form-validation.js';
import {resetMapView} from './map-settings.js';
import {saveAdsData} from './http.js';
import {renderSuccessMessage, renderErrorMessage} from './dialog.js';

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
function enableMainForm () {
  mainForm.classList.remove('ad-form--disabled');
  mainFormElements.forEach(setElementActive);
}

function enableFiltersForm () {
  filterForm.classList.remove('map__filters--disabled');
  filterFormElements.forEach(setElementActive);
}

//Сделать формы на странице неактивными
function disabledMainForm () {
  mainForm.classList.add('ad-form--disabled');
  mainFormElements.forEach(setElementDisabled);
}

function disabledFiltersForm () {
  filterForm.classList.add('map__filters--disabled');
  filterFormElements.forEach(setElementDisabled);
}

//Записать координаты в поле адреса
const addressInput = document.querySelector('#address');
function setAddress(address){
  addressInput.value  = `lat: ${address.lat.toFixed(5)} lng: ${address.lng.toFixed(5)}`;
}

// Обнуление формы после отправки
function resetMapAndForm() {
  mainForm.reset();
  resetMapView();
}

//Обнуление формы и карты по кнопке
const resetButton = document.querySelector('.ad-form__reset');
resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetMapAndForm();
});

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
mainForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();

  if (isValid) {
    blockSubmitButton();
    saveAdsData(
      () => {
        renderSuccessMessage();
        resetMapAndForm();
        unblockSubmitButton();
      },
      () => {
        renderErrorMessage();
        unblockSubmitButton();
      },
      new FormData(evt.target),
    );
  }
});


export {enableMainForm, enableFiltersForm, disabledMainForm, disabledFiltersForm, setAddress};
