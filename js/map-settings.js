const map = L.map('map-canvas')
  .on('load', () => {
    const filterForm = document.querySelector('.map__filters');
    const mainForm = document.querySelector('.ad-form');

    filterForm.classList.remove('map__filters--disabled');
    mainForm.classList.remove('ad-form--disabled');

    function setElementActive(item) {
      item.removeAttribute('disabled');
    }

    const filterFormElements = filterForm.querySelectorAll('fieldset');
    filterFormElements.forEach(setElementActive);

    const mainFormElements = mainForm.querySelectorAll('fieldset');
    mainFormElements.forEach(setElementActive);
  })
  .setView({
    lat: 35.70139,
    lng: 139.70972,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const secondPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [50, 50],
  iconAnchor: [25, 50],
});

const mainMarker = L.marker(
  {
    lat: 35.70139,
    lng: 139.70972,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

export {map, mainMarker, secondPinIcon};
