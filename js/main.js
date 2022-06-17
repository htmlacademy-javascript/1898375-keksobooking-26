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
function getRandomIndex (someArray) {
  const randomIndex = getRandomInt (1, someArray.length - 1);

  return someArray[randomIndex];
}

//Получить случайный массив из слов строки
function getRandomStringsArray (string) {
  const newArray = string.split(' ');
  const arrayWithRepeats = [];

  for (let i = 0; i <= newArray.length - 1; i++) {
    arrayWithRepeats[i] = getRandomIndex(newArray);
  }

  const uniqueArray = [...new Set(arrayWithRepeats)];

  return uniqueArray;
}

// ВЫЧЕСЛЕНИЯ ДЛЯ Object

// Создать {location:}
function getLocation () {
  const latNumber = getRandomIntFloat(35.65000, 35.70000, 5);
  const lngNumber = getRandomIntFloat(139.70000, 139.80000, 5);

  return {
    lat: latNumber,
    lng: lngNumber
  };
}

const objectLocation = getLocation();

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

const features = 'wifi dishwasher parking washer elevator conditioner';
const photos =
'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg ' +
'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg '+
'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg';

function createOffer () {
  const randomTitle = getRandomIndex(TITLE_ARRAY);
  const randomPrice = getRandomInt(5000, 20000);
  const randomType = getRandomIndex(TYPE_ARRAY);
  const randomRoomsNumber = getRandomInt(1, 10);
  const randomGuestsNumber = getRandomInt(1, 15);
  const checkinTime = getRandomIndex(TIME_ARRAY);
  const checkoutTime = getRandomIndex(TIME_ARRAY);
  const randomFeatures = getRandomStringsArray(features);
  const randomDescription = getRandomIndex(DESCRIPTION_ARRAY);
  const randomPhotos = getRandomStringsArray(photos);

  return {
    title: randomTitle,
    address: `${objectLocation.lat}, ${objectLocation.lng}`,
    price: randomPrice,
    type: randomType,
    rooms: randomRoomsNumber,
    guests: randomGuestsNumber,
    checkin: checkinTime,
    checkout: checkoutTime,
    features: randomFeatures,
    description: randomDescription,
    photos: randomPhotos
  };
}

// Создать {author:}
function getNumbersArray(length) {
  const someArray = [];

  for (let i = 0; i <= length; i++) {
    someArray[i] = String(i).padStart(2, 0);
  }

  return someArray;
}

const numbersArray = getNumbersArray(10);

function getAuthor (array) {
  const avatarNumber = getRandomIndex(array);

  return {
    avatar: `img/avatars/user${avatarNumber}.png`,
  };
}

// Соединяем вычеления в Object
const createOneObject = function () {

  return {
    author: getAuthor(numbersArray),
    offer: createOffer(),
    location: getLocation(),
  };
};

//Cоздать массив из 10 обьектов
const objectsArray = Array.from({length: 10},createOneObject);

objectsArray();
