const express = require('express');
const server = express();
const router = require('./routes/index');
const morgan = require('morgan');
const PORT = 3001;

//MIDDLEWARE
server.use(express.json());
server.use(morgan('dev'));

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use('/rickandmorty', router);

server.use((req, res) => {
    res.status(404).send('El personaje no existe');
});

server.listen(PORT, () => {
    console.log(`Server raised in port: ${PORT}`);
});