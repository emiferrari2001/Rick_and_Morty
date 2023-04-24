const express = require('express');
const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/"
const routerCharacters = express.Router()

const getCharById = routerCharacters.get('/:id',(req, res)=>{
    //mi req aca es lo que me llega del index al llamar a la funcion
    console.log('entra a get?')
    const {id} = req.params;
    console.log('id: ' + id);
    axios.get(`${URL}${id}`)
    .then(result => result.data)
//puedo hacer destructuring de los valores de data
.then((data) => {
    const { id, status, name, species, origin, image, gender } = data;
    //tengo que guardar un objeto con el personaje
    const character = {
        id: id,
        name: name,
        gender: gender,
        species: species,
        origin: origin.name,
        image: image,
        status: status
      };
      console.log('pj')
      res.header('Access-Control-Allow-Origin', '*');
      res.json(character);
      })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
  })
  //routerCharacters.get('/', getCharById);

  module.exports = getCharById;