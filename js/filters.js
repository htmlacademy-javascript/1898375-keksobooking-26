const MAX_ADS_AMOUN = 10;
const MIN_ADS_PRICE = 10000;
const MAX_ADS_PRICE = 50000;

const housingType = document.querySelector('#housing-type');
const housingRooms = document.querySelector('#housing-rooms');
const housingPrice = document.querySelector('#housing-price');
const housingGuests = document.querySelector('#housing-guests');

const validateByType = (ad) =>
  housingType.value === 'any' || housingType.value === ad.offer.type;

const validateByRooms = (ad) =>
  housingRooms.value === 'any' || +housingRooms.value === ad.offer.rooms;

const validateByPrice = (ad) => {
  switch (housingPrice.value) {
    case 'middle':
      return MIN_ADS_PRICE <= ad.offer.price <= MAX_ADS_PRICE;
    case 'low':
      return ad.offer.price < MIN_ADS_PRICE;
    case 'high':
      return ad.offer.price > MAX_ADS_PRICE;
    default:
      return housingPrice.value === 'any';
  }
};

const validateByGuests = (ad) => housingGuests.value === 'any' || +housingGuests.value === ad.offer.guests;


const filterByFeatures = (ad) => {
  const checkBoxFeatures = document.querySelectorAll('.map__checkbox:checked');
  if (checkBoxFeatures.length && ad.offer.features) {
    return Array.from(checkBoxFeatures).every((checkFeatures) => ad.offer.features.includes(checkFeatures.value));
  }

  return checkBoxFeatures.length === 0;
};

const filteringAds = (ads) => {
  const result = [];

  for (const ad of ads) {
    if (validateByType(ad) && validateByGuests(ad) && validateByRooms(ad) && validateByPrice(ad) && filterByFeatures(ad)) {
      result.push(ad);
    }

    if (result.length === MAX_ADS_AMOUN) {
      break;
    }
  }

  return result;
};

export {filteringAds};
