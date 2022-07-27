import {createOfferPopup} from './offer-popup.js';
import {enableMainForm, enableFiltersForm, setAddress} from './form.js';
import {getAdsData} from './http.js';
import {renderAdvtErrorMessage} from './dialog.js';
import {saveAds, getMaxAds} from './save-ads-data.js';

const DEFAULT_ADRESS = {
  lat: 35.70139,
  lng: 139.70972,
};

const map = L.map('map-canvas')
  .on('load', () => {
    enableMainForm();
    setAddress(DEFAULT_ADRESS);

    //Загрузка и отрисовка обьявлений
    getAdsData(
      (ads) => {
        enableFiltersForm();
        saveAds(ads);
        renderMarkersLayer(getMaxAds());
      },
      () => {
        renderAdvtErrorMessage();
      },);

  })
  .setView({
    lat: DEFAULT_ADRESS.lat,
    lng: DEFAULT_ADRESS.lng,
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
    lat: DEFAULT_ADRESS.lat,
    lng: DEFAULT_ADRESS.lng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainMarker.addTo(map);

const resetMapView = () => {
  mainMarker.setLatLng({
    lat: DEFAULT_ADRESS.lat,
    lng: DEFAULT_ADRESS.lng,
  });

  map.setView({
    lat: DEFAULT_ADRESS.lat,
    lng: DEFAULT_ADRESS.lng,
  }, 10);
  setAddress(DEFAULT_ADRESS);
  renderMarkersLayer(getMaxAds());
};

//Получение координат с главной метки
mainMarker.on('moveend', (evt) => {
  const coordinate = evt.target.getLatLng();
  setAddress(coordinate);
});

//Добавить слой меток на карту с всплывающими окнами
const markerLayerGroup = L.layerGroup().addTo(map);

const createMarker = (element) => {
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
    .addTo(markerLayerGroup)
    .bindPopup(createOfferPopup(element));
};

//Очистить слой маркеров
const clearLayerMarkers = () => {
  markerLayerGroup.clearLayers();
};

//Создать слой маркеров (декларативное обьявление для вставка в загрузку карты)
function renderMarkersLayer(offers) {
  clearLayerMarkers();
  offers.forEach((offer) => {
    createMarker(offer);
  });
}


export {resetMapView,renderMarkersLayer};
