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

// avatar:
function getNumbersArray(length) {
  const someArray = [];

  for (let i = 0; i <= length; i++) {
    someArray[i] = String(i).padStart(2, 0);
  }

  return someArray;
}

const numbersArray = getNumbersArray(10);

function getAvatarNumber () {
  const randomIndex = getRandomInt (1, numbersArray.length - 1);
  return numbersArray[randomIndex];
}

const avatarNumber = getAvatarNumber();


// function createOffer () {
//   return {
//     title: ,
//     address: ,
//     price: ,
//     type: ,
//     rooms: ,
//     guests: ,
//     checkin: ,
//     checkout: ,
//     features: ,
//     photos:
//   }

// }

function getAuthor () {
  return {
    avatar: `img/avatars/user${avatarNumber}.png`,
  };
}

function getLocation () {
  const latNumber = getRandomIntFloat(35.65000, 35.70000, 5);
  const lngNumber = getRandomIntFloat(139.70000, 139.80000, 5);
  return {
    lat: latNumber,
    lng: lngNumber
  };
}

function createObject () {

  return {
    author: getAuthor(),
    location: getLocation()
  };
}

console.log(createObject());
