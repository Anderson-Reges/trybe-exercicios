const fs = require('fs/promises');

const readFile = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return console.log(`Error on read file - Error: ${err.message}`);
  }
};

module.exports = { readFile }