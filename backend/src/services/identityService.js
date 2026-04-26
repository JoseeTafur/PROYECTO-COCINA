const axios = require('axios');
const userModel = require('../models/userModel');
const LogIdentidad = require('../models/logModel'); 

const validateWithReniec = async (dni) => {
    try {
        const url = `${process.env.MIAPI_BASE_URL}/dni/${dni}`;
        
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${process.env.MIAPI_BEARER_TOKEN}`
            }
        });

        const data = response.data.datos;

        if (data) {
            // --- PERSISTENCIA EN MYSQL (Datos Maestros) ---
            const resultado = await userModel.saveUser(data); 
            console.log(`Registro guardado en MySQL. ID: ${resultado.insertId}`);

            // --- PERSISTENCIA EN MONGODB (Logs de Auditoría) ---
            const nuevoLog = new LogIdentidad({
                dni_consultado: dni,
                respuesta_api: response.data, 
                metodo: 'RENIEC_MIAPI'
            });
            await nuevoLog.save();
            console.log(`Log de auditoría guardado en MongoDB`);
        }

        return response.data;
    } catch (error) {
        throw new Error("Error en el proceso de identidad: " + error.message);
    }
};

module.exports = { validateWithReniec };