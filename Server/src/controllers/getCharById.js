const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async(req, res)=>{
    try {
    const {id} = req.params;
    console.log('id: ' + id);
    const result = await axios(`${URL}${id}`);
    //el objeto result tiene la propiedad data que contiene todo lo que me interesa
    // en lugar de hacer 2 then con promesas, recibo el result y hago destructuring
    const { status, name, species, origin, image, gender } = result.data;
        //si al entrar en la url encuentra un personaje, lo devuelvo
        if(name){
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
          return res.status(200).json(character)
        }
        // si no tiene name es porque no hay error en la ruta pero no hay nada que devolver, entonces pongo que no se encontro
        return res.status(404).send('Not found');
      } catch(error){
          res.status(500).json({ message: error.message });
        };
      }
  //routerCharacters.get('/', getCharById);

  module.exports = getCharById;