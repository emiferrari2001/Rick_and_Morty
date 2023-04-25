const users = require('../utils/users');
console.log('llega a login');
const login = (req, res)=>{
    const {email,password} = req.query;
    const filtradoUser = []
    users.filter((user)=>{
        if(user.email === email && user.password === password){
            filtradoUser.push(user)
        }  
    });
    console.log(filtradoUser.length)
    if(filtradoUser.length === 1){
        return res.status(200).json({'access': true});
    } else{
        //res.header('Access-Control-Allow-Origin', '*');
        return res.status(200).json({'access': false})
    }
}

module.exports = login;