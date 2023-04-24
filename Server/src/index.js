const express = require('express');
const server = express();
const PORT = 3001;
const getCharById = require('./controllers/getCharById');
const login = require('./controllers/login');
const router = require('./routes/index');

server.use(express.json())
server.use('/rickandmorty', router);

server.use((req, res) => {
    res.status(404).send('El personaje no existe');
});

server.listen(PORT, () => {
    console.log(`Server raised in port: ${PORT}`);
});