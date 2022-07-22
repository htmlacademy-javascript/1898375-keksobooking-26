import {isEscKeydown, isMouseButton} from './util.js';

//Удаление сообщения
function removeMessage(evt) {
  const MessageToUser = document.querySelector('#message-to-user');
  if (isEscKeydown(evt) || isMouseButton(evt)) {
    MessageToUser.remove();
    document.removeEventListener('click', removeMessage);
    document.removeEventListener('keydown', removeMessage);
  }
}

//Создать сообщение из шаблона
function renderMessageTemplate(elements) {
  const newPopup = elements.cloneNode(true);
  document.body.append(newPopup);
  document.addEventListener('click', removeMessage);
  document.addEventListener('keydown', removeMessage);
}

//Создать сообщение о успешной отправке формы
const successTemplate = document.querySelector('#success').content;
const successContent = successTemplate.querySelector('.success');

function renderSuccessMessage() {
  renderMessageTemplate(successContent);
}

//Создать сообщение о ошибке отправки формы
const errorTemplate = document.querySelector('#error').content;
const errorContent = errorTemplate.querySelector('.error');

function renderErrorMessage() {
  renderMessageTemplate(errorContent);
}

//Ошибка загрузки обьявлений
function renderAdvtErrorMessage() {
  renderErrorMessage();
  document.querySelector('.error__message').textContent = 'Не удалось подгрузить обьявления';
  document.querySelector('.error__button').textContent = 'Продолжить';
}

export {renderAdvtErrorMessage, renderSuccessMessage, renderErrorMessage};
