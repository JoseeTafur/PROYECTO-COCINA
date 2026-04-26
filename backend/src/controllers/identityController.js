const validateDni = async (req, res) => {
    try{
        const {dni} = req.body;

        //Verificación
        if(!dni || dni.length !== 8){
            return res.status(400).json({
                success: false,
                message: "DNI inválido. Debe tener 8 dígitos."
            })
        }

        //Respuesta temporal
        res.status(200).json({
            success: true,
            message: "DNI recibido correctamente para validaciones.",
            data: { dni }
        });
    } catch(error){
        res.status(500).json({
            success: false,
            message: "Error interno al procesar la identidad"
        })
    }
};

module.exports = {validateDni};