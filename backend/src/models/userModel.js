const db = require('../config/db');

const saveUser = async (userData) => {
    // Agregamos este log para ver qué recibe el modelo realmente
    console.log("Datos recibidos en el modelo:", userData);

    const { dni, nombres, ape_paterno, ape_materno, domiciliado } = userData;
    
    // Validamos que domiciliado exista para que no explote
    const direccion = domiciliado?.direccion || 'No especificada';
    const distrito = domiciliado?.distrito || 'No especificado';
    const provincia = domiciliado?.provincia || 'No especificada';

    const query = `
        INSERT INTO usuarios 
        (dni, nombres, apellido_paterno, apellido_materno, direccion, distrito, ciudad) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE nombres = VALUES(nombres);
    `;

    const values = [dni, nombres, ape_paterno, ape_materno, direccion, distrito, provincia];

    try {
        const [result] = await db.execute(query, values);
        console.log("Resultado real de MySQL:", result);
        return result;
    } catch (error) {
        console.error("❌ Error específico en la base de datos:", error.message);
        throw error;
    }
};

module.exports = { saveUser };