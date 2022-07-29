const priceSlider = document.querySelector('.ad-form__slider');
const priceInput = document.querySelector('#price');
const placeSelect = document.querySelector('#type');

noUiSlider.create(priceSlider,{
  range: {
    min: 0,
    max: Number(priceInput.max),
  },
  start: 0,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

//Изменение значение цены и слайдера через выбор места
placeSelect.addEventListener('change', () => {
  priceSlider.noUiSlider.updateOptions({
    range: {
      min: Number(priceInput.min),
      max: Number(priceInput.max),
    },
    start: Number(priceInput.min),
  });
  priceSlider.noUiSlider.set(priceInput.value);
});

//Управление значением ручку слайдера
priceSlider.noUiSlider.on('update', () => {
  priceInput.value = priceSlider.noUiSlider.get();
});

//Управление noUiSlider'ом через ввод значения
priceInput.addEventListener('input', () => {
  priceSlider.noUiSlider.set(priceInput.value);
});
