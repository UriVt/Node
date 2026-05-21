const express = require ('express')

const app = express();
require('dotenv').config();

app.get('/', (req, res) =>{
    res.send('hola mundo');
});
const PORT =process.env.PORT;

app.listen(PORT,() =>{
    console.log('escucha desde el puerto ${PORT}');
});