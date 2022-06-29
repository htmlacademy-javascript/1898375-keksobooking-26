import {createOffersArray, MAX_ADS} from './create-offers.js';

const OFFER_NAME_BY_TYPE = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

const template = document.querySelector('#card').content;
const cardTemplate = template.querySelector('.popup');

const offers = createOffersArray(MAX_ADS);

const offersListFragment = document.createDocumentFragment();

offers.forEach((offerData) => {
  const offerCard = cardTemplate.cloneNode(true);

  //наполняем одиночные элементы
  offerCard.querySelector('img').src = `${offerData.author.avatar}`;
  offerCard.querySelector('.popup__title').textContent = `${offerData.offer.title}`;
  offerCard.querySelector('.popup__text--address').textContent = `${offerData.offer.adress}`;
  offerCard.querySelector('.popup__text--price').textContent = `${offerData.offer.price} ₽/ночь`;
  offerCard.querySelector('.popup__type').textContent = `${OFFER_NAME_BY_TYPE[offerData.offer.type]}`;
  offerCard.querySelector('.popup__text--capacity').textContent = `${offerData.offer.rooms} комнат для ${offerData.offer.guests} гостей`;
  offerCard.querySelector('.popup__text--time').textContent = `Заезд после ${offerData.offer.checkin}, выезд до ${offerData.offer.checkout}`;
  offerCard.querySelector('.popup__description').textContent = `${offerData.offer.description}`;

  //наполняем списки
  const featuresList = offerCard.querySelector('.popup__features');
  featuresList.innerHTML = '';
  offerData.offer.features.forEach((feature) => {
    const listItem = document.createElement('li');
    listItem.classList.add('popup__feature');
    listItem.classList.add(`popup__feature--${feature}`);
    featuresList.append(listItem);
  });

  const popupPhotos = offerCard.querySelector('.popup__photos');
  const popupPhoto = popupPhotos.querySelector('.popup__photo');
  popupPhotos.innerHTML = '';
  offerData.offer.photos.forEach((photo) => {
    const newPhoto = popupPhoto.cloneNode();
    newPhoto.src = photo;
    popupPhotos.append(newPhoto);
  });

  //проверка на пустые элементы
  const textElements = offerCard.querySelectorAll('.popup__text');
  textElements.forEach((textElement) => {
    if (textElement.textContent === '') {
      textElement.classList.add ('hidden');
    }
  });

  offersListFragment.append(offerCard);
});

const mapCanvas = document.querySelector('#map-canvas');
const firstOffer = offersListFragment.querySelector('.popup');
mapCanvas.append(firstOffer);
