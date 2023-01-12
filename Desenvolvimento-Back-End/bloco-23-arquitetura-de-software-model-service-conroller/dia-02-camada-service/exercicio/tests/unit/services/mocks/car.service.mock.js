const validModel = 'Chevrolet Monza' ;
const validColor = 'Branco';
const validPlate = 'ABC1A2B';
const invalideValue = 'a';

const newCar = {
    id: 1,
    model: validModel,
    color: validColor,
    licensePlate: validPlate,
};

const messageErro = {
  type: 'INVALID_VALUE',
  message: '"model" length must be at least 3 characters long',
};

// tests/unit/services/mocks/car-exercises.service.mock.js
const carList = [
  {
    id: 1,
    model: 'Renault Sandero',
    color: 'Branco',
    licensePlate: 'NCA-0956',
  },
  {
    id: 2,
    model: 'Volkswagen Gol',
    color: 'Vermelho',
    licensePlate: 'DZG-4376',
  },
  {
    id: 3,
    model: 'Chevrolet Onix',
    color: 'Prata',
    licensePlate: 'KBJ-2899',
  },
  {
    id: 4,
    model: 'Renault Logan',
    color: 'Azul',
    licensePlate: 'NFA-9035',
  },
  {
    id: 5,
    model: 'Fiat Siena',
    color: 'Cinza',
    licensePlate: 'HTH-9177',
  },
  {
    id: 6,
    model: 'Nissan Versa',
    color: 'Preto',
    licensePlate: 'BGY-6802',
  },
];

module.exports = {
  newCar,
  messageErro,
  validColor,
  validModel,
  validPlate,
  invalideValue,
  carList,
}