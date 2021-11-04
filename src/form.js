import { URL, insertCar } from './car';

const form = document.querySelector('#new-car');

const prepareForm = () => {
  // We could also:
  // const inputs = document.getElementsByClassName('form-control'); -> [inputs, inputs, inputs, inputs]
  const brand = document.getElementById('brand');
  const model = document.getElementById('model');
  const owner = document.getElementById('owner');
  const plate = document.getElementById('plate');
  return {
    brand: brand.value,
    model: model.value,
    owner: owner.value,
    plate: plate.value
  };
};

const createCar = (event) => {
  event.preventDefault();
  fetch(URL, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(prepareForm())
  })
    .then(response => response.json())
    .then(insertCar);
  // To reset our form after we create a car
  form.reset();
};

const newForm = () => {
  form.addEventListener('submit', createCar);
};

export { newForm };
