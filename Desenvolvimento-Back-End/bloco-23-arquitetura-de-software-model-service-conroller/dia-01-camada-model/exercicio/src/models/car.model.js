const connection = require('./connection');

const insertCar = async (car) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO cars (model, color, license_plate) VALUE (?, ?, ?)',
    [car.model, car.color, car.licensePlate],
  );
  console.log(insertId);

  return insertId;
};

const findById = async (id) => {
  const [result] = await connection.execute(
    'SELECT * FROM cars WHERE id = ?;', [id],
  );

  return result;
};

module.exports = {
  insertCar,
  findById,
};