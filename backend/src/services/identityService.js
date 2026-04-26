const axios = require('axios');
const userModel = require('../models/userModel');

const validateWithReniec = async (dni) => {
    try {
        const url = `${process.env.MIAPI_BASE_URL}/dni/${dni}`;
        //Llamamos a la API
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${process.env.MIAPI_BEARER_TOKEN}`
            }
        });

        const data = response.data.datos;

        if (data) {
            const resultado = await userModel.saveUser(data); 
            console.log(`✅ Registro guardado en MySQL. ID generado: ${resultado.insertId}`);
        }

        return response.data;
    } catch (error) {
        throw new Error("Error en el proceso de identidad: " + error.message);
    }
};

module.exports = {validateWithReniec};