const express = require('express');
const routerLogin = express.Router()
const users = require('../utils/users');
console.log('llega a login');
const login = routerLogin.get('/',(req, res)=>{
    const {email,password} = req.query;
    const filtradoUser = []
    users.filter((user)=>{
        if(user.email === email && user.password === password){
            filtradoUser.push(user)
        }  
    });
    console.log(filtradoUser.length)
    if(filtradoUser.length === 1){
        res.status(200).json({'access': true});
    } else{
        //res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json({'access': false})
    }
})

module.exports = login;