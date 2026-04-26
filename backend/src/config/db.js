const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root', 
    password: process.env.DB_PASSWORD || '', 
    database: process.env.DB_NAME,
    port: 3306
});

// Prueba de fuego: ¿Qué está leyendo realmente?
console.log(`Intento de conexión con usuario: ${process.env.DB_USER}`);

module.exports = pool;