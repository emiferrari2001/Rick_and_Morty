const http = require('http');
//const data = require('./utils/data.js');
const getCharById = require('./controllers/getCharById');

const servidor = http
.createServer((request, response) =>{
    response.setHeader('Access-Control-Allow-Origin', '*');
    if(request.url.includes('/rickandmorty/character')){
        let urlCortada = request.url.split('/character/')[1];
        let id = Number(urlCortada);
        console.log('pido personaje');
        getCharById(response, id)
    } else {
        response.writeHead(404, {
            "Content-type":"text/plain"
        })
        return response.end('El personaje no existe');
    }
})
servidor.listen(3001, 'localhost', ()=>{
    console.log('hola')
})