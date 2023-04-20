const axios = require('axios');

const getCharById = (response, id)=>{
console.log('funcionnnnn')
axios
.get(`https://rickandmortyapi.com/api/character/${id}`)
.then(result => result.data)
.then((data) => {
    console.log(data);
    //tengo que guardar un objeto con el personaje
    const character = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin.name,
        image: data.image,
        status: data.status
      };
    response.writeHead(200, {
        "Content-type" : "application/json"
    })
    return response.end(JSON.stringify(character));    
        }
    )
.catch((error)=>{
    response.writeHead(500, {
        "Content-type" : "text/plain"
    })
    return response.end(error.message)
})
}
module.exports = getCharById
