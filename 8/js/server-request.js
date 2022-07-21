const OBJETS_COUNT = 10;

//Удаление сообщений и их событий
function onEvtClosePopup(evt) {
  evt.preventDefault();
  const lastElements = document.body.lastChild;
  if (evt.key === 'Escape') {
    lastElements.remove();
    document.removeEventListener('click', onEvtClosePopup);
    document.removeEventListener('keydown', onEvtClosePopup);
  } else {
    lastElements.remove();
    document.removeEventListener('click', onEvtClosePopup);
    document.removeEventListener('keydown', onEvtClosePopup);

  }
}

//Создать сообщение о успешной отправке формы
const successTemplate = document.querySelector('#success').content;
const successTemplateContent = successTemplate.querySelector('.success');

function createSuccessPopup() {
  const newSuccessPopup = successTemplateContent.cloneNode(true);
  document.body.append(newSuccessPopup);
  document.addEventListener('click', onEvtClosePopup);
  document.addEventListener('keydown', onEvtClosePopup);
}

//Создать сообщение о ошибке отправки формы
const errorTemplate = document.querySelector('#error').content;
const errorTemplateContent = errorTemplate.querySelector('.error');

function createErrorPopup() {
  const newErrorPopup = errorTemplateContent.cloneNode(true);
  const closeButton = newErrorPopup.querySelector('.error__button');
  closeButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.querySelector('.error').remove();
  });
  document.body.append(newErrorPopup);
  document.addEventListener('click', onEvtClosePopup);
  document.addEventListener('keydown', onEvtClosePopup);
}

//Не удалось загрузить обьявления

function createAdvtErrorPopup() {
  const newErrorPopup = errorTemplateContent.cloneNode(true);
  newErrorPopup.querySelector('.error__message').textContent = 'Не удалось подгрузить обьявления';
  newErrorPopup.querySelector('.error__button').textContent = 'Продолжить';
  const closeButton = newErrorPopup.querySelector('.error__button');
  closeButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.querySelector('.error').remove();
  });
  document.body.append(newErrorPopup);
  document.addEventListener('click', onEvtClosePopup);
  document.addEventListener('keydown', onEvtClosePopup);
}

//Запросить данные с сервера
const getData = (onSuccess) => {
  fetch('https://26.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return  response.json();
      } else {
        throw new Error('Не удалось загрузить обявления.');
      }
    })
    .then((offers) => {
      const offersLeft = offers.slice(0, OBJETS_COUNT);
      onSuccess(offersLeft);
    })
    .catch(() => {
      createAdvtErrorPopup();
    });
};

//Отправка данных на сервер
const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://26.javascript.pages.academy/keksobookin',
    {
      method: 'POST',
      body: body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData, createSuccessPopup, createErrorPopup};
