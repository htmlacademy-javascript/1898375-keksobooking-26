import {map, mainMarker, secondPinIcon} from './map-settings.js';
import {createOfferPopup, offersData} from './offer-popup.js';

mainMarker.addTo(map);

function reloadMap() {
  mainMarker.setLatLng({
    lat: 35.70139,
    lng: 139.70972,
  });

  map.setView({
    lat: 35.70139,
    lng: 139.70972,
  }, 10);

}

//Сброс карты в начальное положение
const resetButton = document.querySelector('.ad-form__reset');
resetButton.addEventListener('click', reloadMap);

//Добавление координат через движение главной метки
const addressInput = document.querySelector('#address');
mainMarker.on('moveend', (evt) => {
  const addressFromMap = evt.target.getLatLng();
  addressInput.value  = `lat: ${addressFromMap.lat.toFixed(5)} lng: ${addressFromMap.lng.toFixed(5)}`;
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


