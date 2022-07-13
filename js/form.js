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
function getAddress(address){
  addressInput.value  = `lat: ${address.lat.toFixed(5)} lng: ${address.lng.toFixed(5)}`;
}

export {enableForms, disabledForms, getAddress};
