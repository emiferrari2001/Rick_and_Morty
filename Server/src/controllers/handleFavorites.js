const express = require('express');
const routerFavorites = express.Router()
let myFavorites = [];
const postFav = routerFavorites.post('/', (req,res)=>{
    const character = req.body;
    console.log(character)
 myFavorites.push(character);
 //res.header('Access-Control-Allow-Origin', '*');
 res.json(myFavorites)
})

const deleteFav = routerFavorites.delete('/:id', (req, res) =>{
    const {id} = req.params;
    //console.log(id)
    myFavorites = myFavorites.filter((character)=> character.id !== +id)
    console.log(myFavorites)
    //res.header('Access-Control-Allow-Origin', '*');
    res.json(myFavorites);
})

module.exports = {postFav , deleteFav};