const express = require("express");
const app = express();

app.use(express.json());

app.get('/',(req,res) => {res.send("Servidor activo")});

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Servidor activo en http://localhost:${PORT}`);
});