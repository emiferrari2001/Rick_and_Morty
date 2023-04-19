const http = require('http');
const data = require('./utils/data.js');

const servidor = http
.createServer((request, response) =>{
    response.setHeader('Access-Control-Allow-Origin', '*');
    if(request.url.includes('/rickandmorty/character')){
        console.log('entra al if');
        //corta la url despues de character y obtiene la segunda posicion del array
        let urlCortada = request.url.split('/character/')[1];
        let id = Number(urlCortada);
        const character = data.find((char) => char.id === id);
        response.writeHead(200, {
            "Content-type":"application/json"
        })
        return response.end(JSON.stringify(character))
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