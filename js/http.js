import {sliceArray} from './util.js';
import {renderAdvtErrorMessage} from './dialog.js';

const REQUEST_ADDRESS = 'https://26.javascript.pages.academy/keksobooking/data';
const SENDING_ADDRESS = 'https://26.javascript.pages.academy/keksobooking';

//Запросить данные с сервера
function getAdsData(onSuccess) {
  fetch(REQUEST_ADDRESS)
    .then((response) => {
      if (response.ok) {
        return  response.json();
      } else {
        throw new Error('Не удалось загрузить обявления.');
      }
    })
    .then((offers) => {
      onSuccess(sliceArray(offers));
    })
    .catch(() => {
      renderAdvtErrorMessage();
    });
}

//Сбор и отправка данных на сервер
function saveAdsData(onSuccess, onFail, body) {
  fetch(
    SENDING_ADDRESS,
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
}

export {getAdsData, saveAdsData};
