//хранилище данных с сервера
let savedAds = [];

//Сохранить данные пришедшие с сервера
const saveAds = (data) => {
  savedAds = data;
};

//Получить сохраннённые данные с сервера
const getSavedAds = () => savedAds;

export {saveAds, getSavedAds};
