const express = require('express');
const router = express.Router();

router.post('/validate' , (req,res) => {
    const { dni } = req.body;

    res.json({
        mensaje: "Ruta de validación activa",
        recibido: "dni"
    });
});

module.exports = router;