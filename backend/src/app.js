const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const identifyRoutes = require('./routes/identityRoutes');

const app = express();
app.use(express.json());

//Routes -> identifyRoutes
app.use('/api/v1/identity', identifyRoutes);

//Gets
app.get('/health', (req,res) => 
    {res.json({ status: 'ok'});
});

app.get('/',(req,res) => 
    {res.send("Servidor activo")}
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Servidor activo en http://localhost:${PORT}`);
}); 