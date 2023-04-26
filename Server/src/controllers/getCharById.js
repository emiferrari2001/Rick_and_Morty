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
    
    // si no tiene name es porque no hay error en la ruta pero no esta la propiedad que se busca, entonces arrojo error
    if (!name) throw Error(`Faltan datos del personaje con ID: ${id}.`);

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
        
      } catch(error){
        //si el mensaje de error tiene ID es porque es un error del usuario (por lo que se usa 404)
        //quiza porque no tiene name en ese id
        return error.message.includes('ID')
        ? res.status(404).send(error.message)
        // error del servidor: error 500
        : res.status(500).send(error.response.data.error);
        };
      }
  //routerCharacters.get('/', getCharById);

  module.exports = getCharById;