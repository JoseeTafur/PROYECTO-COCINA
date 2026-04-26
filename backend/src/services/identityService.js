const axios = require('axios');

const validateWithReniec = async (dni) => {
    try {
        const url = `${process.env.MIAPI_BASE_URL}/dni/${dni}`;
        //Llamamos a la API
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${process.env.MIAPI_BEARER_TOKEN}`
            }
        });

        return response.data;
    } catch(error){
        console.log("Error en service: error.message");
        throw new Error("No se pudo conectar con el servicio de identidad externo");
    }
};

module.exports = {validateWithReniec};