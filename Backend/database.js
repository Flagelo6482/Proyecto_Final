const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', // o la URL de tu servidor de base de datos
  user: 'user',
  password: 'root',
  database: 'jugadores'
});

connection.connect(error => {
  if (error) throw error;
  console.log("Conectado exitosamente a la base de datos MySQL.");
});

module.exports = connection;
