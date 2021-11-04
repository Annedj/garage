const URL = 'https://wagon-garage-api.herokuapp.com/luigi-garage/cars';

const insertCar = (car) => {
  const carElement = `<div class="car">
    <div class="car-image">
      <img src="http://loremflickr.com/280/280/${car.brand} ${car.model}" />
    </div>
    <div class="car-info">
      <h4>${car.brand} ${car.model}</h4>
      <p><strong>Owner:</strong> ${car.owner}</p>
      <p><strong>Plate:</strong> ${car.plate}</p>
    </div>
  </div>`;
  const list = document.querySelector('.cars-list');
  list.insertAdjacentHTML('beforeend', carElement);
};

const fetchAndDisplayCars = () => {
  fetch(URL)
    .then(response => response.json())
    .then((data) => {
      data.forEach(insertCar);
    });
};

export { fetchAndDisplayCars, URL, insertCar };
