//  ОБЩИЕ ФУНКЦИИ

//Получение случайного целого числа в заданном интервале, включительно.
function getRandomInt(min, max) {
  if (min >=0 && max > 0 && min !== max && max > min) {
    const minValue = Math.ceil(min);
    const maxValue = Math.floor(max);

    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }

  return null;
}

//Получение случайного числа с плавающей точкой в заданном интервале включительно, с указанным "количеством знаков после запятой".
function getRandomIntFloat(min, max, afterDecimal) {
  if (min >=0 && max > 0 && min !== max && max > min) {
    const intFloat = Math.random() * (max - min + 1) + min;

    return +intFloat.toFixed(afterDecimal);
  }

  return null;
}

//Получить случайный элемент массива
function getRandomItem(array) {
  return array[Math.floor(Math.random()*array.length)];
}

//Получить массив случайной длины
function getRandomArray(array) {
  const index = [Math.floor(Math.random()*array.length)];
  const newArray = array.slice(index, array.length);
  return newArray;
}

// ВЫЧЕСЛЕНИЯ ДЛЯ Offer

// Создать {location:}

const LATITUDE_ARRAY = [35.65000, 35.70000, 5];
const LONGITUDE_ARRAY = [139.70000, 139.80000, 5];

function getLocation() {
  return {
    lat: getRandomIntFloat(...LATITUDE_ARRAY),
    lng: getRandomIntFloat(...LONGITUDE_ARRAY)
  };
}

// Создать {offer:}
const TITLE_ARRAY = [
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

const TYPE_ARRAY = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const TIME_ARRAY = [
  '12:00',
  '13:00',
  '14:00'
];

const DESCRIPTION_ARRAY = [
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

const RANDOM_NUMBERS = [1, 10];
const RANDOM_PRICE = [5000, 20000];

function createOffer(value, index) {
  const randomTitle = getRandomItem(TITLE_ARRAY);
  const randomPrice = getRandomInt(...RANDOM_PRICE);
  const randomType = getRandomItem(TYPE_ARRAY);
  const randomRoomsNumber = getRandomInt(...RANDOM_NUMBERS);
  const randomGuestsNumber = getRandomInt(...RANDOM_NUMBERS);
  const checkinTime = getRandomItem(TIME_ARRAY);
  const checkoutTime = getRandomItem(TIME_ARRAY);
  const randomFeatures = getRandomArray(FEATURES);
  const randomDescription = getRandomItem(DESCRIPTION_ARRAY);
  const randomPhotos = getRandomArray(PHOTOS);
  const randomLocation = getLocation();
  const avatarNumber = String(index + 1).padStart(2, '0');
  return {
    author: {avatar: `img/avatars/${avatarNumber}.png`,},
    offer: {
      title: randomTitle,
      adress: `${randomLocation.lat}, ${randomLocation.lng}`,
      price: randomPrice,
      type: randomType,
      rooms: randomRoomsNumber,
      guests: randomGuestsNumber,
      checkin: checkinTime,
      checkout: checkoutTime,
      features: randomFeatures,
      description: randomDescription,
      photos: randomPhotos
    },
    location: randomLocation
  };
}

//Cоздать массив из 10 обьектов
const ARRAY_LENGTH = 10;

function objectsArray () {
  return Array.from({length: ARRAY_LENGTH},createOffer);
}

objectsArray();
