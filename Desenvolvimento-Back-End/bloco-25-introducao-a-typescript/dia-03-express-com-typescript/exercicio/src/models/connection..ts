import mysql from 'mysql2/promise';

export default mysql.createPool({
  host: 'localhost',
  port: 33060,
  user: 'root',
  password: 'root',
  database: 'TypeScriptExpress',
  dateStrings: true,
});