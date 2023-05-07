const {Favorite} = require('../DB_connection');

const deleteFav = async(req, res)=>{
const {id} = req.params;
try {
    if(!id) throw new Error('Es necesario un ID');
    const delFav = await Favorite.destroy({
        where: {id}
    });
    const allFavs = await Favorite.findAll();
    console.log(allFavs);
    return res.status(200).json(allFavs);

} catch (error) {
    return res.status(500).send({error: error.message})
}
}

module.exports = deleteFav;