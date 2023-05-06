const {User} = require('../DB_connection');

const postUser = async(req,res)=>{
const {email, password} = req.body;
console.log(email);
try {
   if(!email || !password) return res.status(400).send({msg: 'Faltan datos'}); 
   const [newUser, created] = await User.findOrCreate({
    where:{
        email, password
    },
    defaults:{email,password}
   });
   if(created) {
    return res.status(200).json(newUser)
    } else {
        res.status(200).json({ message: "Este user ya existe"})
    }
} catch (error) {
    res.status(500).send({msg: error.message});    
}
}

module.exports = postUser;