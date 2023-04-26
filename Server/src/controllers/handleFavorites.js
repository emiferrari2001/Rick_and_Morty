let myFavorites = [];
const postFav = (req,res)=>{
    try{
        const character = req.body;
        console.log(character)
        const characterFound = myFavorites.find(fav => fav.id === character.id);
        if (characterFound) throw Error('El personaje ya existe en Favorites');
        myFavorites.push(character);
        return res.status(200).json(myFavorites);
    } catch(error){
        return res.status(404).send(error.message)
    }
}

const deleteFav = (req, res) =>{
    const {id} = req.params;
    //console.log(id)
    myFavorites = myFavorites.filter((character)=> character.id !== id)
    console.log(myFavorites)
    
    return res.status(200).json(myFavorites);
}

module.exports = {postFav , deleteFav};