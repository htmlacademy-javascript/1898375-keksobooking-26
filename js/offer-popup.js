const OFFER_NAME_BY_TYPE = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

const template = document.querySelector('#card').content;
const cardTemplate = template.querySelector('.popup');

const createOfferPopup = function(offerData) {
  const offerPopup = cardTemplate.cloneNode(true);

  //наполняем одиночные элементы
  offerPopup.querySelector('img').src = offerData.author.avatar;
  offerPopup.querySelector('.popup__title').textContent = offerData.offer.title;
  offerPopup.querySelector('.popup__text--address').textContent = offerData.offer.adress;
  offerPopup.querySelector('.popup__type').textContent = OFFER_NAME_BY_TYPE[offerData.offer.type];
  offerPopup.querySelector('.popup__text--capacity').textContent = `${offerData.offer.rooms} комнат для ${offerData.offer.guests} гостей`;
  offerPopup.querySelector('.popup__text--time').textContent = `Заезд после ${offerData.offer.checkin}, выезд до ${offerData.offer.checkout}`;
  offerPopup.querySelector('.popup__text--price').insertAdjacentText('afterbegin',offerData.offer.price);

  //проверка на отсуствие данных и заполнение
  const popupDescription = offerPopup.querySelector('.popup__description');
  if (offerData.offer.description) {
    popupDescription.textContent = offerData.offer.description;
  } else {
    popupDescription.classList.add ('hidden');
  }

  //наполняем списки c проверкой данных
  const featuresList = offerPopup.querySelector('.popup__features');
  if (offerData.offer.features) {
    while (featuresList.firstChild) {
      featuresList.removeChild(featuresList.firstChild);
    }
    offerData.offer.features.forEach((feature) => {
      const listItem = document.createElement('li');
      listItem.className = `popup__feature popup__feature--${feature}`;
      featuresList.append(listItem);
    });
  } else {
    featuresList.classList.add ('hidden');
  }

  const popupPhotos = offerPopup.querySelector('.popup__photos');
  if (offerData.offer.photos) {
    const popupPhoto = popupPhotos.querySelector('.popup__photo');
    popupPhoto.remove();
    offerData.offer.photos.forEach((photo) => {
      const newPhoto = popupPhoto.cloneNode();
      newPhoto.src = photo;
      popupPhotos.append(newPhoto);
    });
  } else {
    popupPhotos.classList.add ('hidden');
  }

  return offerPopup;
};

export {createOfferPopup};
