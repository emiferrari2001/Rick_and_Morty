let myFavorites = [];
const postFav = (req,res)=>{
    const character = req.body;
    console.log(character)
    myFavorites.push(character);
    return res.status(200).json(myFavorites);
}

const deleteFav = (req, res) =>{
    const {id} = req.params;
    //console.log(id)
    myFavorites = myFavorites.filter((character)=> character.id !== id)
    console.log(myFavorites)
    
    return res.status(200).json(myFavorites);
}

module.exports = {postFav , deleteFav};