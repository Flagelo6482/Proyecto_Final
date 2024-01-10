const express = require('express');
const app = express();
const port = 3001; // Puedes elegir otro puerto

const db = require('./database');

app.use(express.json());

// Ejemplo de una ruta
app.get('/jugadores', (req, res) => {
  // Consulta a la base de datos para obtener jugadores
  db.query('SELECT * FROM jugadores', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

app.get('/test-conexion', (req, res) => {
    db.query('SELECT 1 + 1 AS solution', (error, results) => {
      if (error) {
        console.error('Error al realizar la consulta: ', error);
        res.status(500).send('Error al probar la conexión a la base de datos');
        return;
      }
      res.send(`La prueba de conexión fue exitosa: ${results[0].solution}`);
    });
  });
  