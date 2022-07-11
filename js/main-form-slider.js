const priceSlaider = document.querySelector('.ad-form__slider');
const priceInput = document.querySelector('#price');
const placeSelect = document.querySelector('#type');


noUiSlider.create(priceSlaider,{
  range: {
    min: 0,
    max: Number(priceInput.max),
  },
  start: 0,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

//Изменение значение цены и слайдера через выбор места
placeSelect.addEventListener('change', () => {
  priceSlaider.noUiSlider.updateOptions({
    range: {
      min: Number(priceInput.min),
      max: Number(priceInput.max),
    },
    start: Number(priceInput.min),
  });
  priceSlaider.noUiSlider.set(priceInput.value);
});

//Управление значением ручку слайдера
priceSlaider.noUiSlider.on('update', () => {
  priceInput.value = priceSlaider.noUiSlider.get();
});

//Управление noUiSlider'ом через ввод значения
priceInput.addEventListener('input', () => {
  priceSlaider.noUiSlider.set(priceInput.value);
});
