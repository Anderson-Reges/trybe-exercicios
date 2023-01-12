const { carModel } = require('../models');
const schema = require('./validations/validationsInputValues');

const createCar = async (model, color, licensePlate) => {
  const error = schema.validateNewCar(model, color, licensePlate);
  if (error.type) return error;

  const addCar = await carModel.insertCar({ model, color, licensePlate });
  return { type: null, message: addCar };
};

module.exports = {
  createCar,
};