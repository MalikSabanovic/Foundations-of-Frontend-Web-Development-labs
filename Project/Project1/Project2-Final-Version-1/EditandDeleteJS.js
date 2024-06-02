const carList = document.getElementById('carList');
const brandInput = document.getElementById('brandInput');
const modelInput = document.getElementById('modelInput');
const yearInput = document.getElementById('yearInput');
const addCarButton = document.getElementById('addCarButton');

let cars = [
    { brand: 'Volkswagen', model: 'Golf R', year: 2024 },
    { brand: 'Volkswagen', model: 'Touareg R Line', year: 2024 },
    { brand: 'Volkswagen', model: 'Tiguan Style', year: 2024 }
];

updateCarList();

addCarButton.addEventListener('click', function() {
    const brand = brandInput.value.trim();
    const model = modelInput.value.trim();
    const year = parseInt(yearInput.value.trim());

    if (brand !== '' && model !== '' && !isNaN(year)) {
        cars.push({ brand, model, year });
        updateCarList();
        brandInput.value = '';
        modelInput.value = '';
        yearInput.value = '';
    } else {
        alert('Please fill in all fields correctly.');
    }
});

function updateCarList() {
    carList.innerHTML = '';
    cars.forEach((car, index) => {
        const carContainer = document.createElement('div');
        carContainer.classList.add('car-container');

        const carInfo = document.createElement('div');
        carInfo.textContent = `${car.brand} ${car.model} (${car.year})`;
        carInfo.classList.add('car-info');

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function() {
            editCar(index);
        });
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            deleteCar(index);
        });

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(deleteButton);

        carContainer.appendChild(carInfo);
        carContainer.appendChild(buttonContainer);

        carList.appendChild(carContainer);
    });
}

function editCar(index) {
    const editedBrand = prompt('Edit the brand:', cars[index].brand);
    const editedModel = prompt('Edit the model:', cars[index].model);
    const editedYear = parseInt(prompt('Edit the year:', cars[index].year));

    if (editedBrand !== null && editedModel !== null && !isNaN(editedYear)) {
        cars[index].brand = editedBrand.trim();
        cars[index].model = editedModel.trim();
        cars[index].year = editedYear;
        updateCarList();
    }
}

function deleteCar(index) {
    if (confirm('Are you sure you want to delete this car?')) {
        cars.splice(index, 1);
        updateCarList();
    }
}
