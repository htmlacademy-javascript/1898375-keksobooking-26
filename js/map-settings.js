import {createOfferPopup, offersData} from './offer-popup.js';
import {enableForms, writeDownAddress} from './form.js';

const MAP_LAT = 35.70139;
const MAP_LNG = 139.70972;

const map = L.map('map-canvas')
  .on('load', () => {
    enableForms();
  })
  .setView({
    lat: MAP_LAT,
    lng: MAP_LNG,
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
    lat: MAP_LAT,
    lng: MAP_LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainMarker.addTo(map);

function resetMapView() {
  mainMarker.setLatLng({
    lat: MAP_LAT,
    lng: MAP_LNG,
  });

  map.setView({
    lat: MAP_LAT,
    lng: MAP_LNG,
  }, 10);

}

//Сброс карты в начальное положение
const resetButton = document.querySelector('.ad-form__reset');
resetButton.addEventListener('click', resetMapView);

//Получение координат с главной метки
mainMarker.on('moveend', (evt) => {
  const coordinate = evt.target.getLatLng();
  writeDownAddress(coordinate);
});

//Добавить слой меток на карту с всплывающими окнами
const markerGroup = L.layerGroup().addTo(map);

function createMarker(element) {
  const lat = element.location.lat;
  const lng = element.location.lng;
  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      secondPinIcon,
    },
  );

  marker
    .addTo(markerGroup)
    .bindPopup(createOfferPopup(element));
}

offersData.forEach((element) => {
  createMarker(element);
});
