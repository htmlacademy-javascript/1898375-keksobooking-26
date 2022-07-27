import {isEscKeydown, isMouseButton} from './util.js';

//Удаление сообщения
const messageRemoveHadler = (evt) => {
  const messageToUser = document.querySelector('#message-to-user');
  if (isEscKeydown(evt) || isMouseButton && messageToUser) {
    messageToUser.remove();
    document.removeEventListener('click', messageRemoveHadler);
    document.removeEventListener('keydown', messageRemoveHadler);
  }
};

//Создать сообщение из шаблона
const renderMessageTemplate = (elements) => {
  const newPopup = elements.cloneNode(true);
  document.body.append(newPopup);
  document.addEventListener('click', messageRemoveHadler);
  document.addEventListener('keydown', messageRemoveHadler);
};

//Создать сообщение о успешной отправке формы
const successTemplate = document.querySelector('#success').content;
const successContent = successTemplate.querySelector('.success');

const renderSuccessMessage = function() {
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
