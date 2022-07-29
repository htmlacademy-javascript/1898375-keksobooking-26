import {pristine} from './main-form-validation.js';
import {resetMapView, renderMarkersLayer,} from './map-settings.js';
import {saveAdsData} from './http.js';
import {renderSuccessMessage, renderErrorMessage} from './dialog.js';
import {getSavedAds} from './save-ads-data.js';
import {getFilteredAds} from './filters.js';
import {setDebounce} from './util.js';

const RENDER_DELAY = 500;
const DEFAULT_FORM_IMAGE = 'img/muffin-grey.svg';

//элементы форм
const filterForm = document.querySelector('.map__filters');
const mainForm = document.querySelector('.ad-form');
const filterFormSelects = filterForm.querySelectorAll('.map__filter');
const filterFormCheckboxes = filterForm.querySelectorAll('fieldset');
const mainFormElements = mainForm.querySelectorAll('fieldset');

const userUploadAvatar = document.querySelector('.ad-form-header__image');
const userUploadPhoto = document.querySelector('.ad-form__photo-preview');

const timeFildset = mainForm.querySelector('.ad-form__element--time');
const checkInTime = timeFildset.querySelector('#timein');
const checkOutTime = timeFildset.querySelector('#timeout');

const setElementActive = (item) => {
  item.removeAttribute('disabled');
};

const setElementDisabled = (item) => {
  item.setAttribute('disabled');
};

//Сделать формы на странице активными
const enableMainForm = () => {
  mainForm.classList.remove('ad-form--disabled');
  mainFormElements.forEach(setElementActive);
};

const enableFiltersForm = () => {
  filterForm.classList.remove('map__filters--disabled');
  filterFormSelects.forEach(setElementActive);
  filterFormCheckboxes.forEach(setElementActive);
};

//Сделать формы на странице неактивными
const disableMainForm = () => {
  mainForm.classList.add('ad-form--disabled');
  mainFormElements.forEach(setElementDisabled);
};

const disableFiltersForm = () => {
  filterForm.classList.add('map__filters--disabled');
  filterFormSelects.forEach(setElementDisabled);
  filterFormCheckboxes.forEach(setElementDisabled);
};

//Записать координаты в поле адреса
const addressInput = document.querySelector('#address');
const setAddress = (address) =>{
  addressInput.value  = `lat: ${address.lat.toFixed(5)} lng: ${address.lng.toFixed(5)}`;
};

// Обнуление формы и карты после отправки
const resetMapAndForm = () => {
  mainForm.reset();
  filterForm.reset();
  userUploadAvatar.src = DEFAULT_FORM_IMAGE;
  userUploadPhoto.src = DEFAULT_FORM_IMAGE;
  resetMapView();
};

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

//Синхранизация заезда и выезда
timeFildset.addEventListener('change', (evt) => {
  if(evt.target === checkInTime) {
    checkOutTime.value = evt.target.value;
  }
  checkInTime.value = evt.target.value;
});

//фильтрация маркеров
filterForm.addEventListener('change', setDebounce(
  () => {
    const ads = getSavedAds();
    const filteredAds = getFilteredAds(ads);
    renderMarkersLayer(filteredAds);
  }, RENDER_DELAY));

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


export {enableMainForm, enableFiltersForm, disableMainForm, disableFiltersForm, setAddress};
