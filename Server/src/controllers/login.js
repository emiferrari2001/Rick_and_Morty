const {User} = require('../DB_connection');

const login = async (req, res) =>{
const {email, password} = req.query;
try {
    if(!email || !password) return res.status(400).send({msg: 'Faltan datos'});
    
    //si llegan ambos valores busco en mi tabla usuarios a ver cual coincide
    const findUser = await User.findOne({
        where:{
            email,
        }
    });
    if(!findUser) return res.status(200).send({access: false});

    // Verifico si la contraseña almacenada es la misma que la recibida
    if (findUser.password !== password) {
        return res.status(200).send({access: false});
      }
      
      return res.status(200).send({access: true});
    
} catch (error) {
    return res.status(500).send({error: error.message});
}
}

module.exports = login;