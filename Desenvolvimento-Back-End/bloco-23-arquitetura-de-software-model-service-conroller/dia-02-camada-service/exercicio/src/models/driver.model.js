const camelize = require('camelize');
const connection = require('./connection');

const findById = async (driverId) => {
  const [result] = await connection.execute(
    'SELECT * FROM drivers WHERE id = ?',
    [driverId],
  );
  return camelize(result);
};

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM drivers',
  );
  console.log(result);

  return camelize(result);
};

const insert = async (driver) => {
  const [result] = await connection.execute(
    'INSERT INTO drivers (name) VALUES (?)', [driver.name],
  );

  return result.insertId;
};

module.exports = {
  findById,
  findAll,
  insert,
};