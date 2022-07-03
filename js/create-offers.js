import {getRandomInt, getRandomIntFloat, getRandomArrayItem, getRandomArray} from './util.js';

// ДАННЫЕ ДЛЯ ВЫЧЕСЛЕНИЯ offer

const LATITUDE_MIN = 35.65000;
const LATITUDE_MAX = 35.70000;

const LONGITUDE_MIN = 139.70000;
const LONGITUDE_MAX = 139.80000;

const NUMBER_AFTER_DECIMAL = 5;

const MIN_ROOM_NUMBER = 1;
const MAX_ROOM_NUMBER = 10;

const MIN_PRICE = 5000;
const MAX_PRICE = 20000;

const MIN_GUESTS_NUMBER = 3;
const MAX_GUESTS_NUMBER = 12;

// количество создаваемых обьявлений
const MAX_ADS = 10;

const TITLES = [
  'Сдесь и сейчас - халупа!',
  'Поместье графа Акулы.',
  'Домик у моря.',
  'Горы и лес - снял кто долез!',
  'У Озера.',
  'Быстро и недорого.',
  'Дорого и небыстро.',
  'Озера нет, совсем.',
  'Домик у гор.',
  'Домик у свалки.'
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const TIMES = [
  '12:00',
  '13:00',
  '14:00'
];

const DESCRIPTIONS = [
  'Пыльно и темно',
  'Cветло и чисто',
  'С дыркой в полу'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

//ВЫЧЕСЛЕНИЯ НА ОСНОВЕ ОБЩИХ ФУНКЦИЙ И ДАННЫХ.

function getLocation() {
  return {
    lat: getRandomIntFloat(LATITUDE_MIN, LATITUDE_MAX, NUMBER_AFTER_DECIMAL),
    lng: getRandomIntFloat(LONGITUDE_MIN,LONGITUDE_MAX, NUMBER_AFTER_DECIMAL)
  };
}

function createOffer(index) {
  const location = getLocation();
  const avatarNumber = String(index).padStart(2, '0');

  return {
    author: {
      avatar: `img/avatars/user${avatarNumber}.png`,
    },
    offer: {
      title: getRandomArrayItem(TITLES),
      adress: `${location.lat}, ${location.lng}`,
      price: getRandomInt(MIN_PRICE, MAX_PRICE),
      type: getRandomArrayItem(TYPES),
      rooms: getRandomInt(MIN_ROOM_NUMBER, MAX_ROOM_NUMBER),
      guests: getRandomInt(MIN_GUESTS_NUMBER, MAX_GUESTS_NUMBER),
      checkin: getRandomArrayItem(TIMES),
      checkout: getRandomArrayItem(TIMES),
      features: getRandomArray(FEATURES),
      description: getRandomArrayItem(DESCRIPTIONS),
      photos: getRandomArray(PHOTOS)
    },
    location
  };
}

//Cоздать нужное количество offer по средствам массива
function createOffersArray (maxElements) {
  return Array.from({length: maxElements},(_, index) => createOffer(index + 1));
}

export {createOffersArray, MAX_ADS};
