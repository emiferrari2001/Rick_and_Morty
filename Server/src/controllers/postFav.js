const {Favorite} = require('../DB_connection');
const {User} = require('../DB_connection');

const postFav = async(req, res)=> {
const {id, name, origin, status, image, species, gender, userId} = req.body;

try {
    if(!id || !name || !origin || !status || !image || !species || !gender) return res.status(401).send({msg: 'Faltan datos'});
    const newFav = await Favorite.findOrCreate({
        where: {
            name, origin, status, image, species, gender
        },
        defaults: {
            id, name, origin, status, image, species, gender
        }
    });
    const allFavs = await Favorite.findAll();
    if(userId){
        const user = await User.findByPk(userId)
        console.log('add fav')
        console.log(newFav[0].dataValues);
        if(user){
            await user.addFavorite(newFav[0].dataValues.id);
        }
    }
    return res.status(200).json(allFavs);
} catch (error) {
    console.log(error.message);
    return res.status(500).send({error: error.message})
}
}

module.exports= postFav;