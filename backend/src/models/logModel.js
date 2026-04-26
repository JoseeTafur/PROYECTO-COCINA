const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    dni_consultado: { type: String, required: true },
    fecha: { type: Date, default: Date.now },
    respuesta_api: { type: Object },
    sistema: { type: String, default: "CocinaStore-UTP" }
});

module.exports = mongoose.model('LogIdentidad', logSchema);