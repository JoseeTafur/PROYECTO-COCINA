const mongoose = require('mongoose');

const connectMongo = async () => {
    try {
        // Usa la URI que tienes en tu .env
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conexión a MongoDB Exitosa");
    } catch (error) {
        console.error("Error conectando a MongoDB:", error.message);
        process.exit(1);
    }
};

module.exports = connectMongo;