const SLICE_COUNT = 10;

//хранилище данных с сервера
let savedAds = [];

//Сохранить данные пришедшие с сервера
const saveAds = (data) => {
  savedAds = data;
};

//Получить массив определённой длины
const getMaxAds = () => savedAds.slice(0, SLICE_COUNT);

//Получить сохраннённые данные с сервера
const getSavedAds = () => savedAds;

export {saveAds, getSavedAds, getMaxAds};
