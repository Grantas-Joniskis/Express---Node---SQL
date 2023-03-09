import mysql from 'mysql2';
import config from 'config';

const connect = (callback: VoidFunction) => {
    const connection = mysql.createConnection(config.database);
    connection.query('SELECT 1', (err, result) => {
      if (err !== null) {
        console.log('ERROR: Failed to connect to database!');
        throw err;
      }
    console.log(result);
    callback();
    connection.end();
    console.log('Successfully connected to database!');
  });
};

const DatabaseService = {
  connect,
};

export default DatabaseService;
