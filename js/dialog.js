import {isEscKeydown, isMouseButton} from './util.js';

//Удаление сообщения
const messageRemoveHandler = (evt) => {
  const messageToUser = document.querySelector('#message-to-user');
  if (isEscKeydown(evt) || isMouseButton(evt)) {
    messageToUser.remove();
    document.removeEventListener('click', messageRemoveHandler);
    document.removeEventListener('keydown', messageRemoveHandler);
  }
};

//Создать сообщение из шаблона
const renderMessageTemplate = (elements) => {
  const newPopup = elements.cloneNode(true);
  document.body.append(newPopup);
  document.addEventListener('click', messageRemoveHandler);
  document.addEventListener('keydown', messageRemoveHandler);
};

//Создать сообщение о успешной отправке формы
const successTemplate = document.querySelector('#success').content;
const successContent = successTemplate.querySelector('.success');

const renderSuccessMessage = () => {
  renderMessageTemplate(successContent);
};

//Создать сообщение о ошибке отправки формы
const errorTemplate = document.querySelector('#error').content;
const errorContent = errorTemplate.querySelector('.error');

const renderErrorMessage = () => {
  renderMessageTemplate(errorContent);
};

//Ошибка загрузки обьявлений
const renderAdvtErrorMessage = () => {
  renderErrorMessage();
  document.querySelector('.error__message').textContent = 'Не удалось подгрузить обьявления';
  document.querySelector('.error__button').textContent = 'Продолжить';
};

export {renderAdvtErrorMessage, renderSuccessMessage, renderErrorMessage};
